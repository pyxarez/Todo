import {
  GET_CATEGORIES,
  ADD_CATEGORY,
  ADD_NESTED_CATEGORY,
  DELETE_CATEGORY,
  RENAME_CATEGORY,
} from '../constants/Category';

import { findTarget, deepClone } from '../../utils/helpers';

const initialState = [];

const categories = (state = initialState, action) => {
  let newCategory;
  let nextState;
  let categoryData;
  let categoryId;
  let title;
  let parentCategoryId;

  switch (action.type) {
    case GET_CATEGORIES:
      //Из-за эмуляции работы с сервером, приходят  обычные 
      // js объекты, а не JSON, значит их нужно обработать,
      // чтобы избежать ошибок и изменением этих объектов
      // в dataStorage. Например, изменили там, тут тоже
      // изменятся, потому-что ссылка :O
      return deepClone(action.payload.categories);
    case ADD_CATEGORY:
      categoryId = action.payload.categoryId;
      title = action.payload.title;

      return [
        {
          id: categoryId,
          title: title,
          nested: []
        },
        ...state
      ];
    case ADD_NESTED_CATEGORY:
      parentCategoryId = action.payload.parentCategoryId;
      categoryId = action.payload.categoryId;
      title = action.payload.title;

      nextState = deepClone(state);

      newCategory = {
        id: categoryId,
        title: title,
        nested: []
      };
      categoryData = findTarget(parentCategoryId, nextState);
      categoryData.category.nested.unshift(newCategory);

      return nextState;
    case DELETE_CATEGORY:
      categoryId = action.payload.categoryId;

      nextState = deepClone(state);

      categoryData = findTarget(categoryId, nextState);
      categoryData.storage.splice(categoryData.index, 1);

      return nextState;
    case RENAME_CATEGORY:
      categoryId = action.payload.categoryId;
      title = action.payload.title;

      nextState = deepClone(state);

      categoryData = findTarget(categoryId, nextState);
      categoryData.category.title = title;

      return nextState;
    default:
      return state;
  }
}

export default categories;