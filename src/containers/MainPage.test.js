import React from 'react';
import { shallow } from 'enzyme';

import { MainPageContainer } from './MainPage'; 

const setup = () => {
  const props = {
    params: {
      id: '0',
      category: 'vassa',
      filter: 'allah'
    },
    addCategory: () => {},
    getProgress: jest.fn(),
    toggleShowDone: () => {},
    getTasks: () => {},
    getCategories: () => {},
    progress: '0%',
    showDone: true
  };
  const wrapper = shallow(<MainPageContainer {...props} />);
  return { 
    props,
    wrapper
  }
};

describe('Containers :: MainPageContainer', () => {
  it('should render self and subcomponents', () => {
    const { wrapper } = setup();
    
    expect(wrapper).toMatchSnapshot();
  });

  it('should call getProgress on component mount', () => {
    const { wrapper, props } = setup();
    wrapper.instance().componentDidMount();

    expect(props.getProgress).toBeCalled();
  });
});