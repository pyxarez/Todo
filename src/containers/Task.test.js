import React from 'react';
import { shallow, mount } from 'enzyme';

import { TaskContainer } from './Task';
import Task from '../components/Task';

const setup = () => {
  const props = {
    categoryId: '0',
    task: {
      id: 0,
      title: 'New Title',
      isDone: false,
      description: '1 2 34 5 6 7'
    },
    checkDone: jest.fn(),
    getProgress: jest.fn()
  }
  const wrapper = shallow(<TaskContainer {...props}/>);

  return {
    wrapper,
    props
  }
};

describe('containers', () => {
  describe('TaskContainer', () => {
    it('should render self and subcomponents', () => {
      const { wrapper } = setup();
      
      expect(wrapper).toMatchSnapshot();
    });
    

    it('should call getProgress', () => {
      const { props, wrapper } = setup();

      wrapper.find(Task).prop('handleDoneTaskClick')();
      expect(props.getProgress).toBeCalled();
    });
  });
});