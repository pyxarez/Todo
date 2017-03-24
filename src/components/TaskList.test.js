import React from 'react';
import { shallow } from 'enzyme';

import TaskList from './TaskList';

const setup = () => {
  const props = {
    onClick: () => {}
  }
  const wrapper = shallow(
    <TaskList {...props}>
      <div className="testClass" />
    </TaskList>
  );

  return {
    props,
    wrapper
  }
}

describe('components', () => {
  describe('TaskList', () => {
    it('should render self', () => {
      const { wrapper } = setup();
      expect(wrapper).toMatchSnapshot();
    });
  });
});