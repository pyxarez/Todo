const changeName = (category) => {
  const newName = prompt("Enter new name", category.title);
  if (!newName) return;
  category.title = newName;
}

const deleteCategory = (categories, index) => {
  if (confirm("Are you sure about this?")) categories.splice(index, 1);
}

const addCategory = (categories) => {
  const title = prompt("Enter name", "Some category");
  console.log(title);
  if (!title) return;

  const categoryTemplate = {
    title,
    nested: [],
    tasks: []
  };
    console.log(categoryTemplate);
  categories.unshift(categoryTemplate);
}

const editCategory = (categories, { target, action }) => {
  categories.forEach((category, index) => {
    const title = category.title;
    const nested = category.nested;

    if (title === target) {
      switch (true) {
        case (action === "edit") :
        changeName(category);
        break;

        case (action === "delete") :
        deleteCategory(categories, index);
        break;

        case (action === "add") :
        addCategory(nested);
        break;
      }
      return;
    } else if (category.nested.length > 0) {
      editCategory(nested, { target, action });
    }
  });
}

export default editCategory;