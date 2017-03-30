import React from 'react';
import { mount, shallow } from 'enzyme';

import { EditTaskContainer } from './EditTask';
import EditTask from '../components/EditTask';


jest.mock('../utils/helpers', () => {
  let returningValue = true;
  
  const gettingTrue = () => { returningValue = true };
  const gettingFalse = () => { returningValue = false };
  const validateInput = () => returningValue;
  
  return {
    gettingTrue,
    gettingFalse,
    validateInput
  };
});

jest.mock('react-router', () => {
  return {
    browserHistory: {
      goBack: jest.fn()
    }
  };
});


import { browserHistory } from 'react-router';
import helpers from '../utils/helpers';

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

describe('Containers :: EditTaskContainer', () => {
  it('should render self and subcomponents', () => {
    const { props } = setup();
    const wrapper = shallow(<EditTaskContainer {...props} />);
    
    expect(wrapper).toMatchSnapshot();
  });

  it('should call saveTaskChanges and browserHistory.goBack', () => {
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
    expect(browserHistory.goBack).toBeCalled();
  });

  it('should call browserHistory.goBack on cancel click', () => {
    const { wrapper } = setup();

    wrapper.find(EditTask).prop('onCancel')();
    expect(browserHistory.goBack).toBeCalled();
  });

  it('should call alert due to the invalid input value', () => {
    helpers.gettingFalse();
    const { wrapper, props } = setup();

    window.alert = jest.fn();
    const editTaskComponent = wrapper.find(EditTask);
    
    editTaskComponent.prop('onSave')();
    
    expect(window.alert)
      .toBeCalledWith('Enter correct task title');
  });
});
