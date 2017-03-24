import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

const setup = () => {
  const props = {
    title: 'Todo'
  };

  const enzymeWrapper = shallow(
    <Header {...props}>
      <div className="testClass" />
    </Header>
  );

  return {
    props,
    enzymeWrapper
  }
};

describe('components', () => {
  describe('Header', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper).toMatchSnapshot();
    });
  });
});