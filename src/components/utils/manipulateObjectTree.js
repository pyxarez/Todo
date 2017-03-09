const changeName = (category) => {
  const newName = prompt("Enter new name", category.title);
  if (!newName) return;
  category.title = newName;
}

const deleteCategory = (categories, index) => {
  if (confirm("Are you sure about this?")) categories.splice(index, 1);
}

const addNestedCategory = (categories) => {
  const title = prompt("Enter name", "Some category");
  if (!title) return;

  const categoryTemplate = {
    title,
    nested: [],
    tasks: []
  };

  categories.unshift(categoryTemplate);
}

const addTask = (taskList, title) => {
  const taskTemplate = {
    title,
    isDone: false,
    description: ""
  };

  taskList.unshift(taskTemplate);
}

const manipulateTree = (categories, { target, action, taskName }) => {
  for (let i = 0; i < categories.length; i++) {
    const {
      title,
      nested,
      tasks
    } = categories[i];

    if (title === target) {
      switch (true) {
        case (action === "edit") :
          changeName(categories[i]);
          break;

        case (action === "delete") :
          deleteCategory(categories, i);
          break;

        case (action === "add") :
          addNestedCategory(nested);
          break;

        case (action === "addTask") :
          addTask(tasks, taskName);
          break;

        case (action === "getTaskList") :
          return tasks;

        default : throw new Error("Enter 'action' argument");
      }
      return;
    } else if (categories[i].nested.length > 0) {
      let result = manipulateTree(nested, { target, action, taskName });
      if (action === "getTaskList" && result) {
        return result;
      }
    }
  }

}

export default manipulateTree;