import React from 'react';
import { shallow } from 'enzyme';

import NotFoundPage from './NotFoundPage';

const setup = () => {
  const wrapper = shallow(<NotFoundPage />)

  return {
    wrapper
  }
}

describe('components', () => {
  describe('NotFoundPage', () => {
    it('should render self', () => {
      const { wrapper } = setup();
      expect(wrapper).toMatchSnapshot();
    });

    it('should call goBack', () => {
      const { wrapper } = setup();

      wrapper.find('button').simulate('click');
      expect(wrapper).toMatchSnapshot();
    });
  });
});