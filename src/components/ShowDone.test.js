import React from 'react';
import { shallow } from 'enzyme';

import ShowDone from './ShowDone';

const setup = () => {
  const props = {
    handleShowDoneClick: () => {},
    ShowDone: true
  }
  const wrapper = shallow(<ShowDone {...props}/>)

  return {
    props,
    wrapper
  }
}

describe('components', () => {
  describe('ShowDone', () => {
    it('should render self', () => {
      const { wrapper } = setup();
      expect(wrapper).toMatchSnapshot();
    });
  });
});