import { DataStorage } from '../utils/DataStorage';

const dataStorage = DataStorage.of();

const getCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve( dataStorage.getCategories() );
    }, 100);
  });
};

const addCategory = (title) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve( dataStorage.addNewCategory(title) );
    }, 100);
  });
};

const addNestedCategory = (parentCategoryId, title) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if ((typeof parentCategoryId !== 'number') || (typeof title !== 'string')) {
        reject(`Wrong arguments in ${addNestedCategory.name}`);
      }
      resolve( dataStorage.addNestedCategory(parentCategoryId, title) );
    }, 100);
  });
};

const deleteCategory = (categoryId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve( dataStorage.deleteCategory(categoryId) );
    }, 100);
  });
};

const renameCategory = (categoryId, newTitle) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve( dataStorage.renameCategory(categoryId, newTitle) );
    }, 100);
  });
};

const getTasks = (categoryId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve( dataStorage.getTasks(categoryId) );
    }, 100);
  });
};

const addTask = (categoryId, title) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const taskId = dataStorage.addTask(categoryId, title);

      taskId === null
      ? reject('Category with this id not found. Please try to pick another one.')
      : resolve(taskId);
    }, 100);
  });
};

const checkDone = (categoryId, taskId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve( dataStorage.checkDone(categoryId, taskId) );
    }, 100);
  })
}

const getProgress = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve( dataStorage.getProgress() );
    }, 100);
  });
};

const changeTaskLocation = (prevCategoryId, newCategoryId, taskId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve( dataStorage.changeTaskLocation( prevCategoryId, newCategoryId, taskId) );
    }, 100);
  });
};

const saveTaskChanges = (options) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve( dataStorage.saveTaskChanges(options) );
    }, 100);
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
