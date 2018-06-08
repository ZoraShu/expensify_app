import {shallow} from 'enzyme';
import React from 'react';
import ExpenseListItem from '../../components/ExpenseListItem';
import toJson from 'enzyme-to-json';
import expenses from '../fixtures/expenses';

test('should render the Expenseslistitem', () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});