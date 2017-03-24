import React from 'react';
import { mount, shallow } from 'enzyme';

import Filter from './Filter';
import Button from './Button';

const setup = () => {
  const props = {
    URLParams: {
      id: '0',
      category: 'Films',
      filter: '54312'
    }
  };

  const enzymeWrapper = mount(
    <Filter {...props}/>
  );

  return {
    props,
    enzymeWrapper
  }
};

describe('components', () => {
  describe('Filter', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper).toMatchSnapshot();
    });

    it('should call handleInputUpdate', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper).toMatchSnapshot();

      const input = enzymeWrapper.find('input');
      input.prop('onChange')({
        target: {
          value: ' '
        }
      });
      expect(enzymeWrapper).toMatchSnapshot();
    });

    it('should call handleClearClick', () => {
      const { enzymeWrapper, props } = setup();
      expect(enzymeWrapper).toMatchSnapshot();

      const buttonComponent = enzymeWrapper.find(Button);
      buttonComponent.simulate('click');
      expect(enzymeWrapper).toMatchSnapshot();
    });
  });
});