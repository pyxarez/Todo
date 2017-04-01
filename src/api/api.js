import { DataStorage } from '../utils/DataStorage';

const dataStorage = DataStorage.of();
const throttle = 0;

const getCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve( dataStorage.getCategories() );
    }, throttle);
  });
};

const addCategory = (title) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve( dataStorage.addNewCategory(title) );
    }, throttle);
  });
};

const addNestedCategory = (parentCategoryId, title) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if ((typeof parentCategoryId !== 'number') || (typeof title !== 'string')) {
        reject(`Wrong arguments in ${addNestedCategory.name}`);
      }
      resolve( dataStorage.addNestedCategory(parentCategoryId, title) );
    }, throttle);
  });
};

const deleteCategory = (categoryId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve( dataStorage.deleteCategory(categoryId) );
    }, throttle);
  });
};

const renameCategory = (categoryId, newTitle) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve( dataStorage.renameCategory(categoryId, newTitle) );
    }, throttle);
  });
};

const getTasks = (categoryId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve( dataStorage.getTasks(categoryId) );
    }, throttle);
  });
};

const addTask = (categoryId, title) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const taskId = dataStorage.addTask(categoryId, title);

      taskId === null
      ? reject('Category with this id not found. Please try to pick another one.')
      : resolve(taskId);
    }, throttle);
  });
};

const checkDone = (categoryId, taskId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve( dataStorage.checkDone(categoryId, taskId) );
    }, throttle);
  })
}

const getProgress = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve( dataStorage.getProgress() );
    }, throttle);
  });
};

const changeTaskLocation = (prevCategoryId, newCategoryId, taskId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve( dataStorage.changeTaskLocation( prevCategoryId, newCategoryId, taskId) );
    }, throttle);
  });
};

const saveTaskChanges = (options) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve( dataStorage.saveTaskChanges(options) );
    }, throttle);
  });
};

export {
  getCategories,
  addCategory,
  addNestedCategory,
  deleteCategory,
  renameCategory,
  getTasks,
  addTask,
  checkDone,
  getProgress,
  changeTaskLocation,
  saveTaskChanges
};
