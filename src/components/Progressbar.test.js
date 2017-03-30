import React from 'react';
import { shallow } from 'enzyme';

import Progressbar from './Progressbar';

const setup = () => {
  const props = {
    progress: '20%'
  }
  const wrapper = shallow(<Progressbar {...props}/>)

  return {
    props,
    wrapper
  }
}

describe('Components :: Progressbar', () => {
  it('should render self', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});