export class IdGenerator {
  constructor() {
    this.count = 0;
  }

  getCount() {
    return this.count;
  }

  getNextId() {
    return this.count++;
  }

  reset() {
    this.count = 0;
  }
}

export class Category {
  constructor(id, title="Buy chicken") {
    this.id = id;
    this.title = title;
    this.nested = [];
    this.tasks = [];
  }

  changeTitle(title=this.title) {
    this.title = title;
  }
}

export class Task {
  constructor(id, title="Find girlfriend") {
    this.id = id
    this.title = title;
    this.isDone = false;
    this.description = "";
  }

  changeTitle(title=this.title) {
    this.title = title;
  }

  toggleDone() {
    this.isDone = !this.isDone;
  }
}

class ProgressBar {
  constructor() {
    this.done = 0;
    this.total = 0;
  }

  increaseTotal() {
    this.total += 1;
  }

  increaseDone() {
    this.done += 1;
  }

  resetData() {
    this.done = 0;
    this.total = 0;
  }

  getProgress() {
    if (this.total === 0) return '0%';
    const progress = (this.done / this.total) * 100;
    return `${Math.round(progress)}%`;
  }
}

export class DataStorage {
  constructor() {
    this.storage = [];
    this.progress = new ProgressBar();
    this._categoryIdGen = new IdGenerator();
    this._taskIdGen = new IdGenerator();
  }

  static of() {
    return new DataStorage();
  }

  _prepareCategories(categories = this.storage) {
    const prepearedCategories = categories.map(category => {
      const nested = category.nested.length > 0
      ? this._prepareCategories(category.nested)
      : category.nested;
      const {
        id,
        title
      } = category;

      return {
        id,
        title,
        nested
      };
    });

    return prepearedCategories;
  }

  getCategories() {
    return this._prepareCategories();
  }

  _countDone(storage=this.storage) {
    storage.forEach((category) => {
      category.tasks.forEach((task) => {
        this.progress.increaseTotal();
        if (task.isDone) this.progress.increaseDone();
      })

      if (category.nested.length > 0) this._countDone(category.nested);
    })
  }

  getProgress() {
    this.progress.resetData();
    this._countDone();
    return this.progress.getProgress();
  }

  _findTarget(target, storage=this.storage) {
    for (var i = 0; i < storage.length; i++) {
      const storageElem = storage[i];
      if (storageElem.id === +target) {
        const returningBundle = {
          category: storageElem,
          storage,
          index: i
        }
        return returningBundle;
      }
      else if (storageElem.nested.length > 0) {
        const returningBundle = this._findTarget(target, storageElem.nested);
        if (Object.keys(returningBundle).length === 3) return returningBundle;
      }
    }

    return {};
  }

  renameCategory(categoryId, newTitle) {
    const { category } = this._findTarget(categoryId);
    category.changeTitle(newTitle);

    return categoryId;
  }

  addNewCategory(title, storage=this.storage) {
    if (this.getCategories().length === 0) this._categoryIdGen.reset();
    const id = this._categoryIdGen.getNextId();
    storage.unshift(new Category(id, title));

    return id;
  }

  deleteCategory(categoryId) {
    const { storage, index } = this._findTarget(categoryId);
    storage.splice(index, 1);

    return categoryId;
  }

  addNestedCategory(parentCategoryId, title) {
    const { category } = this._findTarget(parentCategoryId);
    return this.addNewCategory(title, category.nested);
  }

  addTask(categoryId, title) {
    const taskId = this._taskIdGen.getNextId();
    const { category } = this._findTarget(categoryId);
    if (!category) {
      return false;
    }

    category.tasks.unshift(new Task(taskId, title));

    return taskId;
  }

  getTasks(categoryId) {
    const { category } = this._findTarget(categoryId);
    if (!category) return [];

    return category.tasks;
  }

  checkDone(categoryId, targetTaskId) {
    const tasks = this.getTasks(categoryId);
    tasks.find(task => task.id === targetTaskId)
            .toggleDone();

    return targetTaskId;
  }

  saveTaskChanges({
    id,
    title,
    isDone,
    description,
    categoryId
  }) {
    const tasks = this.getTasks(categoryId);
    const targetTask = tasks.find(task => task.id === id);

    targetTask.title = title;
    targetTask.isDone = isDone;
    targetTask.description = description;

    return targetTask;
  }

  changeTaskLocation(prevLocationId, targetLocationId, taskId) {
    const { category:prevCategory } = this._findTarget(+prevLocationId);
    const { category:targetCategory } = this._findTarget(+targetLocationId);

    const taskIndex = prevCategory.tasks.findIndex((task) => task.id === +taskId);
    const changingTask = prevCategory.tasks.splice(taskIndex, 1);
    targetCategory.tasks.unshift(...changingTask);

    return targetCategory;
  }
}
