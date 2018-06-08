import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import toJson from 'enzyme-to-json';
import expenses from '../fixtures/expenses';
import { wrap } from 'module';
import moment from 'moment';
test('should render Expenseform correctly', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(toJson(wrapper)).toMatchSnapshot();
});


test('should render Expenseform correctly with data', () => {
  const wrapper = shallow(<ExpenseForm  expense = {expenses[0]}/>);
  expect(toJson(wrapper)).toMatchSnapshot();
});


test('shoule render error with invalid from submission', () => {
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {

    }
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
  const value = 'New description';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(0).simulate('change', {
    target: {value}
  });
  expect(wrapper.state('description')).toBe(value);
  // expect(wrapper).toMatchSnapshot();
});

test('should set notes on textarea change', () => {
  const value = 'just for test';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('textarea').simulate('change', {
    target: {value}
  });
  expect(wrapper.state('note')).toBe(value);
  // expect(wrapper).toMatchSnapshot();
});

//这里的value 是向下传的props
/*
  type='text'
  placeholder='Amount'
  value={this.state.amount}
  onChange={this.onAmountChange}

*/
test('should set amount with valid input', () => {
  const value = '10.23';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: {value}//ES6的简写， target.value : value
  });
  expect(wrapper.state('amount')).toBe(value);
});


//这里的value 
test('should set amount with invalid input', () => {
  const value = '10.234';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('amount')).toBe("");
});

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {
    }
  });
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description : expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt : expenses[0].createdAt
  })
});


test('should set new date on date change', () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set on focus change', () => {
  const focused = true;
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
  expect(wrapper.state('calendarFocused')).toBe(focused);
});