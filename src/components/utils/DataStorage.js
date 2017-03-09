class Category {
  constructor(title="Buy chicken") {
    this.title = title;
    this.nested = [];
    this.tasks = [];
  }

  static of(title) {
    return new Category(title);
  }

  changeTitle(title=this.title) {
    this.title = title;
  }
}

class Task {
  constructor(title="Find girlfriend") {
    this.title = title;
    this.isDone = false;
    this.description = "";
  }

  static of(title) {
    return new Task(title);
  }
}

export default class DataStorage {
  constructor() {
    this.storage = [];
  }

  static of() {
    return new DataStorage();
  }

  roadByTree (target, storage=this.storage) {
    for (var i = 0; i < storage.length; i++) {
      const storageElem = storage[i];
      if (storageElem.title === target) {
        const returningValue = {
          category: storage[i],
          storage,
          index: i
        }
        return returningValue;
      }
      else if (storageElem.nested.length > 0) {
        return this.roadByTree(target, storageElem.nested);
      }
    }

    return {};
  }

  editCategory(target) {
    const { category } = this.roadByTree(target);
    const newTitle = prompt("Enter new title", category.title);
    if (!newTitle) return;

    category.changeTitle(newTitle);
  }

  addNewCategory(title, storage=this.storage) {
    storage.unshift(Category.of(title));
  }

  deleteCategory(target) {
    if (!confirm("Are you sure about this?")) return;

    const { storage, index } = this.roadByTree(target);
    storage.splice(index, 1);
  }

  addNestedCategory(target) {
    const title = prompt("Enter title");
    if (!title) return;

    const { category } = this.roadByTree(target);
    this.addNewCategory(title, category.nested);
  }

  addTask(target, title) {
    const { category } = this.roadByTree(target);
    if (!category) {
      alert("Choose category");
      return;
    }

    category.tasks.unshift(Task.of(title));
  }

  getTasks(target) {
    const { category } = this.roadByTree(target);
    if (!category) return;
    return category.tasks;
  }
}