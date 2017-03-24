import React from 'react';
import { shallow } from 'enzyme';

import { EditPageContainer } from './EditPage';

const setup = () => {
  const props = {
    tasks: [
      {
        id: 0,
        title: 'lol',
        isDone: false,
        description: 'troll'
      },
      {
        id: 1,
        title: 'Mishanya',
        isDone: true,
        description: 'woke up'
      }
    ],
    params: {
      categoryId: '0',
      taskId: '1',
      taskTitle: 'Task title'
    },
  };

  const wrapper = shallow(<EditPageContainer {...props}/>);

  return {
    wrapper,
    props
  }
};

describe('containers', () => {
  describe('EditPageContainer', () => {
    it('should render self', () => {
      const { wrapper } = setup();
      expect(wrapper).toMatchSnapshot();
    });

    it('should render NotFoundPage for lack of requested task', () => {
      const { props } = setup();
      props.params.taskId = '3';
      const wrapper = shallow(<EditPageContainer {...props}/>);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
