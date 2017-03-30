import React from 'react';
import { shallow, mount } from 'enzyme';

import { TaskContainer } from './Task';
import Task from '../components/Task';

jest.mock('react-router', () => {
  return {
    browserHistory: {
      push: jest.fn()
    }
  };
});
import { browserHistory } from 'react-router';

const setup = () => {

  const props = {
    categoryId: 0,
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

describe('Containers :: TaskContainer', () => {
  it('should render self and subcomponents', () => {
    const { wrapper } = setup();
    
    expect(wrapper).toMatchSnapshot();
  });

  it('should call getProgress and checkDone', () => {
    const { props, wrapper } = setup();

    wrapper.find(Task).prop('handleDoneTaskClick')();
    expect(props.getProgress).toBeCalled();
    expect(props.checkDone)
      .toBeCalledWith(props.categoryId, props.task.id);
  });

  it('should call browserHistory.push()', () => {
    const { wrapper, props } = setup();

    wrapper.find(Task).prop('handleEditTaskClick')();
    expect(browserHistory.push)
      .toBeCalledWith(`/edit/${props.categoryId}/${props.task.id}/${props.task.title}`);
  });
});