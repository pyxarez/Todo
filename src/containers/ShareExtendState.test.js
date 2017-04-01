import React, { Component } from 'react';
import { shallow } from 'enzyme';

import ShareExtendState from './ShareExtendState';

const TestComponent = () => (<div className="my-test-component"/>);
const ExtendedComponent = ShareExtendState(TestComponent);

const setup = () => {
  const wrapper = shallow(<ExtendedComponent/>);

  return {
    wrapper
  }
};

describe('Containers :: ShareExtendState', () => {
  it('should render self and subcomponents', () => {
    const { wrapper } = setup();
    
    expect(wrapper).toMatchSnapshot();
  });

  it('should change state by calling handleExtendClick', () => {
    const { wrapper } = setup();

    wrapper.find(TestComponent).prop('onExtend')();
    expect(wrapper.state().extended).toBe(true);
  });

  it('should test returning value of getChildrenCount', () => {
    const { wrapper } = setup();

    const testChildren = <div className="i-am-children"></div>;
    expect(wrapper.instance().getChildrenCount(testChildren)).toBe(1);
  });
});