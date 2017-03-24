import React from 'react';
import { shallow } from 'enzyme';

import { Link } from 'react-router';
import Category from './Category';
import Button from './Button';

const setup = () => {
  const props = {
    id: 0,
    title: 'Films',
    onExtend: () => {}
  };

  const enzymeWrapper = shallow(
    <Category {...props}>
      <div className='test-class'/>
    </Category>
  );

  return {
    props,
    enzymeWrapper
  }
};

describe('components', () => {
  describe('Category', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper).toMatchSnapshot();
    });
  });
});