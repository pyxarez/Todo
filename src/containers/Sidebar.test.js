import React, { Component } from 'react';
import { shallow } from 'enzyme';

import { Sidebar } from './Sidebar';

const setup = () => {
  const props = {
    categoryContainer: () => (<div className="test-category-container"></div>),
    categories: [
      {
        id: 0,
        title: 'The first title',
        nested: [
          {
            id: 1,
            title: 'The second title',
            nested: []
          }
        ]
      },
      {
        id: 2,
        title: 'Ther third title',
        nested: []
      }
    ],
    currentCategoryId: 1,
    currentTaskId: 1
  }
  const wrapper = shallow(<Sidebar {...props} />);

  return {
    props, 
    wrapper
  }
};

describe('containers', () => {
  describe('Sidebar', () => {
    it('should render self and 3 categories', () => {
      const { wrapper } = setup();
      
      expect(wrapper).toMatchSnapshot();
    });
    

    it('should render self', () => {
      const { props } = setup();
      const newProps = {
        ...props,
        categories: []
      };
      const wrapper = shallow(<Sidebar {...newProps}/>);

      expect(wrapper).toMatchSnapshot();
    });
  });
});