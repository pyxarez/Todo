export class IdGenerator {
  constructor(initialCount = 0) {
    this.count = initialCount;
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
  constructor(id, title = "Buy chicken") {
    this.id = id;
    this.title = title;
    this.nested = [];
    this.tasks = [];
  }
}

export class Task {
  constructor(id, title = "Find girlfriend") {
    this.id = id
    this.title = title;
    this.isDone = false;
    this.description = "";
  }
}

class Progress {
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
    this.initilizeStorage();
  }

  static of() {
    return new DataStorage();
  }

  initilizeStorage() {
    this.storage = JSON.parse(localStorage.getItem('dataStorage')) || [];
    this._categoryIdGen = new IdGenerator(JSON.parse(localStorage.getItem('categoriesCounter')));
    this._taskIdGen = new IdGenerator(JSON.parse(localStorage.getItem('tasksCounterg')));
    this.progress = new Progress();
  }

  updateLocalStorage() {
    localStorage.setItem('dataStorage', JSON.stringify(this.storage));
  }

  updateLocalStorageCategoriesCounter() {
    localStorage
      .setItem(
        'categoriesCounter',
        JSON.stringify(this._categoryIdGen.getCount())
      );
  }

  updateLocalStorageTasksCounter(count) {
    localStorage
      .setItem(
        'tasksCounterg',
        JSON.stringify(this._taskIdGen.getCount())
      );
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
      } else if (storageElem.nested.length > 0) {
        const returningBundle = this._findTarget(target, storageElem.nested);
        
        if (Object.keys(returningBundle).length === 3) return returningBundle;
      }
    }

    return {};
  }

  renameCategory(categoryId, newTitle) {
    const { category } = this._findTarget(categoryId);
    
    category.title = newTitle;
    this.updateLocalStorage();

    return categoryId;
  }

  addNewCategory(title, storage=this.storage) {
    if (this.getCategories().length === 0) this._categoryIdGen.reset();
    const id = this._categoryIdGen.getNextId();
    
    storage.unshift(new Category(id, title));
    this.updateLocalStorage();
    this.updateLocalStorageCategoriesCounter();

    return id;
  }

  deleteCategory(categoryId) {
    const { storage, index } = this._findTarget(categoryId);
    
    storage.splice(index, 1);
    this.updateLocalStorage();
    
    return categoryId;
  }

  addNestedCategory(parentCategoryId, title) {
    const { category } = this._findTarget(parentCategoryId);
    
    this.updateLocalStorage();
    
    return this.addNewCategory(title, category.nested);
  }

  addTask(categoryId, title) {
    const taskId = this._taskIdGen.getNextId();
    const { category } = this._findTarget(categoryId);
    if (!category) {
      return null;
    }

    category.tasks.unshift(new Task(taskId, title));
    this.updateLocalStorage();
    this.updateLocalStorageTasksCounter();

    return taskId;
  }

  getTasks(categoryId) {
    const { category } = this._findTarget(categoryId);
    if (!category) return [];

    return category.tasks;
  }

  checkDone(categoryId, targetTaskId) {
    const tasks = this.getTasks(categoryId);

    tasks.forEach(task => {
      if (task.id === targetTaskId) {
        task.isDone = !task.isDone;
      }
    });
    this.updateLocalStorage();

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
    
    this.updateLocalStorage();

    return targetTask;
  }

  changeTaskLocation(prevLocationId, targetLocationId, taskId) {
    const { category: prevCategory } = this._findTarget(prevLocationId);
    const { category: targetCategory } = this._findTarget(targetLocationId);
    
    const taskIndex = prevCategory.tasks.findIndex(task => task.id === taskId);
    const changedTask = prevCategory.tasks.splice(taskIndex, 1);
    targetCategory.tasks.unshift(...changedTask);
    
    this.updateLocalStorage();

    return targetCategory;
  }
}
