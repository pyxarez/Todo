import categories from './categories';
import {
  GET_CATEGORIES,
  ADD_CATEGORY,
  ADD_NESTED_CATEGORY,
  DELETE_CATEGORY,
  RENAME_CATEGORY,
} from '../constants/Category';

describe('categories reducer', () => {
  const initialState = [
    {
      id: 0,
      title: 'Bip bip motherfucker',
      nested: [
        {
          id: 1,
          title: 'God damn, i"m so awesome title',
          nested: []
        }
      ]
    }
  ]
  it('should return the initial state', () => {
    expect(
      categories(undefined, {})
    ).toEqual([]);
  });

  it('should handle GET_CATEGORIES', () => {
    expect(
      categories(undefined, {
        type: GET_CATEGORIES,
        payload: {
          categories: [
            {
              id: 5,
              title: 'Lol kek cheburek',
              nested: [
                {
                  id: 65,
                  title: 'Mother father sister brother',
                  nested: []
                }
              ]
            }
          ]
        }
      })
    ).toEqual(
      [
        {
          id: 5,
          title: 'Lol kek cheburek',
          nested: [
            {
              id: 65,
              title: 'Mother father sister brother',
              nested: []
            }
          ]
        }
      ]
    );

    expect(
      categories(initialState, {
        type: GET_CATEGORIES,
        payload: {
          categories: [
            {
              id: 5,
              title: 'Lol kek cheburek',
              nested: [
                {
                  id: 65,
                  title: 'Mother father sister brother',
                  nested: []
                }
              ]
            },
            {
              id: 95,
              title: 'One two three',
              nested: []
            }
          ]
        }
      })
    ).toEqual(
      [
        {
          id: 5,
          title: 'Lol kek cheburek',
          nested: [
            {
              id: 65,
              title: 'Mother father sister brother',
              nested: []
            }
          ]
        },
        {
          id: 95,
          title: 'One two three',
          nested: []
        }
      ]
    );
  });

  it('should handle ADD_CATEGORY', () => {
    expect(
      categories(undefined, {
        type: ADD_CATEGORY,
        payload: {
          categoryId: 0,
          title: 'Mother father sister brother'
        }
      })
    ).toEqual(
      [
        {
          id: 0,
          title: 'Mother father sister brother',
          nested: []
        }
      ]
    );
  });

  it('should handle ADD_NESTED_CATEGORY', () => {
    expect(
      categories(initialState, {
        type: ADD_NESTED_CATEGORY,
        payload: {
          parentCategoryId: 0,
          categoryId: 322,
          title: 'College yollege'
        }
      })
    ).toEqual(
      [
        {
          id: 0,
          title: 'Bip bip motherfucker',
          nested: [
            {
              id: 322,
              title: 'College yollege',
              nested: []
            },
            {
              id: 1,
              title: 'God damn, i"m so awesome title',
              nested: []
            }
          ]
        }
      ]
    );
  });


  it('should handle DELETE_CATEGORY', () => {
    expect(
      categories(initialState, {
        type: DELETE_CATEGORY,
        payload: {
          categoryId: 0
        }
      })
    ).toEqual([]);
  });

  it('should handle RENAME_CATEGORY', () => {
    expect(
      categories(initialState, {
        type: RENAME_CATEGORY,
        payload: {
          categoryId: 0,
          title: 'New title of a category'
        }
      })
    ).toEqual(
      [
        {
          id: 0,
          title: 'New title of a category',
          nested: [
          {
            id: 1,
            title: 'God damn, i"m so awesome title',
            nested: []
          }
          ]
        }
      ]
    );
  });
});