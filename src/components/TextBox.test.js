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

describe('components', () => {
  describe('TextBox', () => {
    it('should render self', () => {
      const { wrapper } = setup();
      expect(wrapper).toMatchSnapshot();
    });

    it('should call handleKeyPress', () => {
      const { wrapper, props } = setup();
      expect(wrapper).toMatchSnapshot();

      const input = wrapper.find('input');
      input.node.value = 'lol';
      input.simulate('keypress', {
        key: 'Enter'
      });

      expect(props.onClick).toBeCalled();
      expect(wrapper).toMatchSnapshot();
    });

    it('should call handleKeyPress with non-enter key', () => {
      const { wrapper, props } = setup();
      expect(wrapper).toMatchSnapshot();

      const input = wrapper.find('input');
      input.simulate('keypress', {
        key: 'e'
      });

      expect(props.onClick).not.toBeCalled();
      expect(wrapper).toMatchSnapshot();
    });

    it('should call handleClick', () => {
      const { wrapper, props } = setup();
      expect(wrapper).toMatchSnapshot();

      const input = wrapper.find('input');
      input.node.value = 'Vassa';

      expect(wrapper).toMatchSnapshot();

      const button = wrapper.find('button');
      button.simulate('click');

      expect(props.onClick).toBeCalled();
      expect(wrapper).toMatchSnapshot();
    });

    it('should call handleClick with empty input', () => {
      const { wrapper, props } = setup();
      expect(wrapper).toMatchSnapshot();

      const button = wrapper.find('button');
      button.simulate('click');

      expect(props.onClick).not.toBeCalled();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
