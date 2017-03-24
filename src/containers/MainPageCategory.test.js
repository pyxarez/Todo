import React from 'react';
import { shallow, mount } from 'enzyme';

import { Container } from './MainPageCategory';
import Button from '../components/Button';

const setup = () => {
  const props = {
    id: 0,
    title: 'New title',
    renameCategory: jest.fn(),
    addNestedCategory: jest.fn(),
    deleteCategory: jest.fn(),
    getTasks: jest.fn(),
    extended: true,
    onExtend: () => {},
    currentCategoryId: '0',
    getChildrenCount: jest.fn(() => 1)
  };
  const wrapper = shallow(
    <Container {...props}>
      <div className="testClass"></div>
    </Container>
  );

  return {
    wrapper,
    props
  }
};

describe('containers', () => {
  describe('MainPageCategory', () => {
    it('should render self and subcomponents', () => {
      const { wrapper } = setup();
      
      expect(wrapper).toMatchSnapshot();
    });

    it('should render self and subcomponents without children', () => {
      const { props } = setup();
      const newProps = {
        ...props,
        getChildrenCount: jest.fn(() => 0)
      }
      const wrapper = shallow(<Container {...newProps}></Container>);
      
      expect(wrapper).toMatchSnapshot();
    });

    it('should render self and subcomponents with \
      not extended container', () => {
      const { props } = setup();
      const newProps = {
        ...props,
        extended: false
      }
      const wrapper = shallow(
        <Container {...newProps}>
          <div className="testClass"></div>
        </Container>
       );
      
      expect(wrapper).toMatchSnapshot();
    });
  });
});