import React from 'react';
import { shallow } from 'enzyme';

import EditTask from './EditTask';

const setup = () => {
  const props = {
    onSave: () => {},
    onCancel: () => {}
  };

  const enzymeWrapper = shallow(
    <EditTask {...props}>
      <div className='test-class'/>
    </EditTask>
  );

  return {
    props,
    enzymeWrapper
  }
};

describe('components', () => {
  describe('EditTask', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper).toMatchSnapshot();
    });
  });
});