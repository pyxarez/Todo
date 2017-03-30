import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

const setup = () => {
  const props = {
    title: 'Todo'
  };

  const wrapper = shallow(
    <Header {...props}>
      <div className="testClass" />
    </Header>
  );

  return {
    props,
    wrapper
  }
};

describe('Components :: Header', () => {
  it('should render self and subcomponents', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});