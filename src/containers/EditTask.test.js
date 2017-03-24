import React from 'react';
import { mount, shallow } from 'enzyme';

import { EditTaskContainer } from './EditTask';
import EditTask from '../components/EditTask';

const setup = () => {
  const props = {
    task: {
      id: 0,
      title: 'Task title',
      isDone: false,
      description: 'Lol'
    },
    categoryId: 0,
    saveTaskChanges: jest.fn()
    
  };

  const wrapper = mount(<EditTaskContainer {...props}/>);

  return {
    wrapper,
    props
  }
};

describe('containers', () => {
  describe('EditTaskContainer', () => {
    it('should render self and subcomponents', () => {
      const { props } = setup();
      const wrapper = shallow(<EditTaskContainer {...props} />);
      
      expect(wrapper).toMatchSnapshot();
    });

    it('should call saveTaskChanges', () => {
      const { wrapper, props } = setup();
      expect(wrapper).toMatchSnapshot();
      
      const editTaskComponent = wrapper.find(EditTask);
      
      const titleInput = wrapper.find('input').at(0);
      const isDoneInput = wrapper.find('input').at(1);
      const descriptionArea = wrapper.find('textarea');
      
      const title = 'New title';
      const isDone = true;
      const description = '1 2 3 4 5 6 7 8';
      
      titleInput.node.value = title;
      isDoneInput.node.checked = isDone;
      descriptionArea.node.value = description;

      editTaskComponent.prop('onSave')();
      
      expect(props.saveTaskChanges).toBeCalledWith({
        categoryId: props.categoryId,
        id: props.task.id,
        title,
        isDone,
        description
      });
      expect(wrapper).toMatchSnapshot();
    });
  });
});
