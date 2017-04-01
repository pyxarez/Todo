import React from 'react';
import { mount } from 'enzyme';

import TextBox from './TextBox';

const setup = () => {
  const props = {
    isFocused: true,
    placeholder: 'Kaaarl',
    onClick: jest.fn()
  }
  const wrapper = mount(
    <TextBox {...props} />
  );

  return {
    props,
    wrapper
  }
}

describe('Components :: TextBox', () => {
  it('should render self', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should call onClick prop through the handleKeyPress call', () => {
    const { wrapper, props } = setup();
    const value = 'lol';

    const input = wrapper.find('input');
    input.node.value = value;
    input.simulate('keypress', {
      key: 'Enter'
    });

    expect(props.onClick)
      .toBeCalledWith(value);
  });

  it('should clear input after successful onClick call', () => {
    const { wrapper, props } = setup();
    const value = 'lol';

    const input = wrapper.find('input');
    input.node.value = value;
 
    const button = wrapper.find('button');
    button.simulate('click');
    
    expect(input.node.value).toBe('');
  });

  it('should call handleKeyPress with non-enter key', () => {
    const { wrapper, props } = setup();

    const input = wrapper.find('input');
    input.simulate('keypress', {
      key: 'e'
    });

    expect(props.onClick).not.toBeCalled();
  });

  it('should call onClick prop through the handleClick call,', () => {
    const { wrapper, props } = setup();
    const value = 'Vassa';

    const input = wrapper.find('input');
    input.node.value = value;

    const button = wrapper.find('button');
    button.simulate('click');

    expect(props.onClick).toBeCalledWith(value);
  });

  it('should call handleClick with empty input', () => {
    const { wrapper, props } = setup();
    window.alert = jest.fn();
    
    const button = wrapper.find('button');
    button.simulate('click');

    expect(window.alert).toBeCalled();
  });
});
