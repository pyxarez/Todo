import React from 'react';
import { shallow } from 'enzyme';

import { Container } from './EditPageCategory';
import Button from '../components/Button';

const setup = () => {
  const props = {
    id: 0,
    title: 'Vassa',
    extended: true,
    onExtend: () => {},
    changeTaskLocation: jest.fn(),
    getChildrenCount: jest.fn(() => 1),
    currentCategoryId: 1,
    currentTaskId: 2
  };
  const wrapper = shallow(
    <Container {...props}>
      <div className='vassa'></div>
    </Container>
  );

  return {
    wrapper,
    props
  }
}

describe('containers', () => {
  describe('EditCategoryContainer', () => {
    it('should render self and subconmponents', () => {
      const { wrapper } = setup();

      expect(wrapper).toMatchSnapshot();
    });

    it('should render self and subconmponents \
      without children and button', () => {
      const { props } = setup();
      const newProps = {
        ...props,
        getChildrenCount: jest.fn(() => 0),
        currentCategoryId: 0,
        id: 0
      };
      const wrapper = shallow(<Container {...newProps} />)

      expect(wrapper).toMatchSnapshot();
    });

    it('should call changeTaskLocation', () => {
      const { wrapper, props } = setup();
      expect(wrapper).toMatchSnapshot();

      const buttonComponent = wrapper.find(Button);
      buttonComponent.simulate('click');

      expect(props.changeTaskLocation)
        .toBeCalledWith(
          props.currentCategoryId,
          props.id,
          props.currentTaskId
        );
      expect(wrapper).toMatchSnapshot();
    });

    it('should render self and subconmponents \
    with not extended container', () => {
      const { props } = setup();
      const newProps = {
        ...props,
        extended: false
      };
      const wrapper = shallow(
        <Container {...newProps} >
          <div></div>
        </Container>
      );

      expect(wrapper).toMatchSnapshot();
    });
  });
});
