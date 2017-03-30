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
    deleteCategory: jest.fn(() => new Promise((resolve, reject) => {
      resolve('deleteCategory resolved');
    })),
    getProgress: jest.fn(),
    getTasks: jest.fn(() => new Promise((resolve, reject) => {
      resolve('getTasks resolved');
    })),
    extended: true,
    onExtend: () => {},
    currentCategoryId: 0,
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

describe('Containers :: MainPageCategory', () => {
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

  it(`should render self and subcomponents with 
    not extended container`, () => {
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

  it('should call renameCategory', () => {
    const { wrapper, props } = setup();
    const newTitle = 'new title';

    window.prompt = jest.fn(() => newTitle);
    wrapper.find(Button).at(0).prop('onClick')();

    expect(props.renameCategory)
      .toBeCalledWith(props.id, newTitle);
  });
  
  it('should prevent renameCategory call', () => {
    const { wrapper, props } = setup();

    window.prompt = jest.fn(() => '');
    wrapper.find(Button).at(0).prop('onClick')();

    expect(props.renameCategory)
      .not
      .toBeCalled();
  });
  
  it('should call addNestedCategory', () => {
    const { wrapper, props } = setup();
    const newTitle = 'new title';

    window.prompt = jest.fn(() => newTitle);
    wrapper.find(Button).at(2).prop('onClick')();

    expect(props.addNestedCategory)
      .toBeCalledWith(props.id, newTitle);
  });

  it('should prevent addNestedCategory call', () => {
    const { wrapper, props } = setup();

    window.prompt = jest.fn(() => '');
    wrapper.find(Button).at(2).prop('onClick')();

    expect(props.addNestedCategory)
      .not
      .toBeCalled();
  });
  
  it('should call deleteCategory and getTasks', async () => {
    const { wrapper, props } = setup();

    window.confirm = jest.fn(() => true);
    try {
      await wrapper.find(Button).at(1).prop('onClick')();

      expect(props.deleteCategory)
        .toBeCalledWith(props.id);
      expect(props.getTasks)
        .toBeCalledWith(null);
    } catch(e) {
      throw e;
    }
  });
  
  it('should prevent deleteCategory call', async () => {
    const { wrapper, props } = setup();

    window.confirm = jest.fn(() => false);
    try {
      await wrapper.find(Button).at(1).prop('onClick')();

      expect(props.deleteCategory)
        .not
        .toBeCalled();
    } catch(e) {
      throw e;
    }
  });
  
  it('should prevent getTasks call', () => {
    const { props } = setup();
    const newProps = {
      ...props,
      id: 41
    };
    const wrapper = shallow(<Container {...newProps}></Container>);

    window.confirm = jest.fn(() => true);
    wrapper.find(Button).at(1).prop('onClick')();

    expect(props.getTasks)
      .toBeCalledWith(newProps.id);
  });
});
