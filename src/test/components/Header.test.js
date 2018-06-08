import React from 'react';
import Header from '../../components/Header';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

test('should render Header correctly', () => {
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
  const wrapper = shallow(<Header />);
  // expect(wrapper.find('h2').text()).toBe('Expensify Bar');
  expect(toJson(wrapper)).toMatchSnapshot();
});