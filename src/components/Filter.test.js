import React from 'react';
import { mount, shallow } from 'enzyme';

import Filter from './Filter';
import Button from './Button';

jest.mock('react-router', () => {
  return {
    browserHistory: {
      push: jest.fn()
    }
  };
});
import { browserHistory } from 'react-router';

const setup = () => {
  const props = {
    URLParams: {
      id: 0,
      category: 'Films',
      filter: '54312'
    }
  };

  const wrapper = mount(
    <Filter {...props}/>
  );

  return {
    props,
    wrapper
  }
};

describe('Component :: Filter', () => {
  afterEach(() => {
    jest.resetAllMocks()
  });
  
  it('should render self and subcomponents', () => {
    const { wrapper } = setup();
    
    expect(wrapper).toMatchSnapshot();
  });

  it('should go to corresponding URL when input update', () => {
    const { wrapper, props } = setup();

    const input = wrapper.find('input');
    const value = 'i"m value';
    input.prop('onChange')({
      target: {
        value
      }
    });

    expect(browserHistory.push)
      .toBeCalledWith(`/main/${props.URLParams.id}/${props.URLParams.category}/${value}`);
  });

  it('should go to corresponding URL when input is cleared', () => {
    const { wrapper, props } = setup();

    const buttonComponent = wrapper.find(Button);
    buttonComponent.simulate('click');
    
    expect(browserHistory.push)
      .toBeCalledWith(`/main/${props.URLParams.id}/${props.URLParams.category}/`);
  });
});