import React from 'react';
import { shallow, mount } from 'enzyme';

import { TaskListContainer } from './TaskList';
import TaskList from '../components/TaskList';

const setup = () => {
  const props = {
    showDone: true,
    tasks: [
      {
        id: 0,
        title: 'New Title',
        isDone: false,
        description: '1 2 34 5 6 7'
      },
      {
        id: 1,
        title: 'New second Title',
        isDone: true,
        description: '1 2 34 5 6 7'
      },
      {
        id: 3,
        title: 'New Title yeaaa',
        isDone: false,
        description: '1 2 34 5 6 7'
      },
    ],
    addTask: jest.fn(() => {
      return new Promise((resolve) => {
          resolve('I\'m born!');
        });
      }
    ),
    getProgress: jest.fn(),
    getTasks: jest.fn(),
    URLParams: {
      id: '0',
      category: 'Some category',
      filter: 'Task filter'
    }
  }
  const wrapper = shallow(<TaskListContainer {...props}/>);

  return {
    wrapper,
    props
  }
};

describe('containers', () => {
  describe('TaskListContainer', () => {
    it('should render self and subcomponents', () => {
      const { wrapper } = setup();
      
      expect(wrapper).toMatchSnapshot();
    });
    

    it('should call addTask', () => {
      const { props, wrapper } = setup();
      const newTitle = 'New title';

      wrapper.find(TaskList).prop('onClick')(newTitle);
      expect(props.addTask)
        .toBeCalledWith(props.URLParams.id, newTitle);
    });

    it('should call getTasks after receiving new props', () => {
      const { wrapper, props } = setup();
      const newProps = {
        URLParams: {
          id: 1
        }
      }
      
      wrapper.instance().componentWillReceiveProps(newProps);

      expect(props.getTasks)
        .toBeCalledWith(newProps.URLParams.id);
    });
  });
});