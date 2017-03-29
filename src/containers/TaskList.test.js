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
    addTask: jest.fn((id, title) => {
      return new Promise((resolve, reject) => {
          if (!id || !title) reject('Error');
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

    it('should render component without done tasks', () => {
      const { props } = setup();
      const newProps = {
        ...props,
        showDone: false
      };
      
      const wrapper = shallow(<TaskListContainer {...newProps}></TaskListContainer>)
      expect(wrapper).toMatchSnapshot();
    });

    it('should call addTask', () => {
      const { props, wrapper } = setup();
      const newTitle = 'New title';

      wrapper.find(TaskList).prop('onClick')(newTitle);
      expect(props.addTask)
        .toBeCalledWith(props.URLParams.id, newTitle);
    });

    it('should call getProgress', () => {
      const { props, wrapper } = setup();
      const newTitle = 'New title';
      
      return expect(wrapper.find(TaskList).prop('onClick')(newTitle)
        .then(() => {
          expect(props.getProgress).toBeCalled();
        })).resolves;
    });

    it('should call alert after failure in addTask function', () => {
      const { props } = setup();
      const newProps = {
        ...props,
        URLParams: {
          id: undefined,
        } 
      };
      const wrapper = shallow(<TaskListContainer {...newProps}/>);
      window.alert = jest.fn();
    
      
      return expect(wrapper.find(TaskList).prop('onClick')()
        .then(() => {
          expect(window.alert).toBeCalled();
        })).rejects;
    });

    it('should call getTasks after receiving new props', () => {
      const { wrapper, props } = setup();
      const newProps = {
        URLParams: {
          id: 1
        }
      };

      wrapper.instance().componentWillReceiveProps(newProps);

      expect(props.getTasks)
        .toBeCalledWith(newProps.URLParams.id);
    });

    it('should not call getTasks after receiving new props', () => {
      const { wrapper, props } = setup();
      const nextProps = {
        URLParams: {
          id: 0
        }
      };

      wrapper.instance().componentWillReceiveProps(nextProps);

      expect(props.getTasks)
        .not
        .toBeCalled();
    });
  });
});