import React from 'react';
import { shallow } from 'enzyme';

import NotFoundPage from './NotFoundPage';

jest.mock('react-router', () => {
  return {
    browserHistory: {
      push: jest.fn()
    }
  };
});
import { browserHistory } from 'react-router';

const setup = () => {
  const wrapper = shallow(<NotFoundPage />)

  return {
    wrapper
  }
}

describe('Components :: NotFoundPage', () => {
  it('should render self', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should go to corresponding URL when press button', () => {
    const { wrapper } = setup();

    wrapper.find('button').simulate('click');
    expect(browserHistory.push)
      .toBeCalledWith('/main');
  });
});