import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import toJson from 'enzyme-to-json';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  //wrapper 里面要传进去的参数，就是mock store 传入的参数
  //connect(mapStateToProps, mapDispatchToProps)

  wrapper = shallow(
    <ExpenseListFilters 
      filters={filters} 
      setTextFilter={setTextFilter}
      sortByAmount={sortByAmount}
      sortByDate={sortByDate}
      setEndDate={setEndDate}
      setStartDate={setStartDate}
    />
  );
});

test('should render ExpenseListFilter correctly', () => {
  expect(toJson(wrapper)).toMatchSnapshot();
});

test('should render ExpenseListFilter with alt data correctly', () => {
  wrapper.setProps({filters: altFilters})
  expect(toJson(wrapper)).toMatchSnapshot();
});


test('should handle text change', () => {
  const value = "billll";
   wrapper.find('input').at(0).simulate('change', {
    target : {value}
    }
  );  
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by date', () => {
  const value = "date";
  wrapper.setProps({filters: altFilters})
  wrapper.find('select').simulate('change', {
      target : {value}
    }
  );  
  expect(sortByDate).toHaveBeenCalled();
});


test('should sort by amount', () => {
  const value = "amount";
  wrapper.find('select').simulate('change', {
      target : {value}
    }
  );  
  expect(sortByAmount).toHaveBeenCalled();
});


test('should handle date change', () => {
  const startDate = moment(0).add(4, 'years');
  const endDate = moment(0).add(8, 'years');
  wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate});
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
});


test('should handle date focus change', () => {
  const calendarFocused = 'endDate';
  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
  // expect(onFocusChange).toHaveBeenLastCalledWith(calendarFocused);
  expect(wrapper.state('calendarFocused')).toEqual(calendarFocused);
});
