import React from 'react';
import { shallow } from 'enzyme';

import Task from './Task';

const setup = () => {
  const props = {
    isDone: true,
    title: 'Vassa',
    handleDoneTaskClick: () => {},
    handleEditTaskClick: () => {}
  }
  const wrapper = shallow(<Task {...props}/>)

  return {
    props,
    wrapper
  }
}

describe('Components :: Task', () => {
  it('should render self', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});