import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

const setup = () => {
  const props = {
    onClick: () => {},
    style: {
      margin: '0 5px'
    },
    type: 'swap'
  };

  const enzymeWrapper = shallow(<Button {...props}/>)

  return {
    props,
    enzymeWrapper
  }
};

describe('components', () => {
  describe('Button', () => {
    it('should render self', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper).toMatchSnapshot();
    });
  });
});