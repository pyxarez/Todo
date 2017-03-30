import React from 'react';
import { shallow } from 'enzyme';

import EditTask from './EditTask';

const setup = () => {
  const props = {
    onSave: () => {},
    onCancel: () => {}
  };

  const wrapper = shallow(
    <EditTask {...props}>
      <div className='test-class'/>
    </EditTask>
  );

  return {
    props,
    wrapper
  }
};

describe('Components :: EditTask', () => {
  it('should render self and subcomponents', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should not render children', () => {
    const { props } = setup();
    const wrapper = shallow(<EditTask {...props} ></EditTask>);
    
    expect(EditTask).toMatchSnapshot();
  });
});