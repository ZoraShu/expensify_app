import React from 'react';
import { shallow } from 'enzyme';
import {ExpenseList} from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';
// import toJSON from '../../components/Header';
import toJson from 'enzyme-to-json';

//here we want to test the react component which did not connect with the store
test('shoule render ExpenseList with expense', () => {
  const wrapper = shallow(<ExpenseList expenses={expenses}/>)
  expect(toJson(wrapper)).toMatchSnapshot();
});


test('shoule render ExpenseList with empty expense', () => {
  const wrapper = shallow(<ExpenseList expenses={[]}/>)
  expect(toJson(wrapper)).toMatchSnapshot();
});


