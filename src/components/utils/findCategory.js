export default function findCategory(Categories, necessaryCategory) {
  let path = [];

  for (var i = 0; i < Categories.length; i++) {
    const removableCategoryId = Categories[i].indexOf(necessaryCategory);

    if (removableCategoryId !== -1) {
      path.push(i, removableCategoryId);
    }
  }

  return path;
}