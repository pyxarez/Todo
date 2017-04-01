import React from 'react';
import { shallow } from 'enzyme';

import { Link } from 'react-router';
import Category from './Category';
import Button from './Button';

const setup = () => {
  const props = {
    id: 0,
    title: 'Films',
    onExtend: () => {}
  };

  const wrapper = shallow(
    <Category {...props}>
      <div className='test-class'/>
    </Category>
  );

  return {
    props,
    wrapper
  }
};

describe('Components :: Category', () => {
  it('should render self and subcomponents', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should not render children', () => {
    const { props } = setup();
    const wrapper = shallow(<Category {...props}/>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should not render Button component', () => {
    const { props } = setup();
    const newProps = {
      ...props,
      onExtend: false
    };
    const wrapper = shallow(
      <Category {...newProps}>
        <div className="test-class"></div>
      </Category>
     );
    
    expect(wrapper).toMatchSnapshot();
  });
});