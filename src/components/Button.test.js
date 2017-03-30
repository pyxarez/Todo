import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

const setup = () => {
  const props = {
    onClick: () => {},
    type: 'swap'
  };

  const enzymeWrapper = shallow(<Button {...props}/>)

  return {
    props,
    enzymeWrapper
  }
};

describe('Component :: Button', () => {
  it('should render self', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper).toMatchSnapshot();
  });
});