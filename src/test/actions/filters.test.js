import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../../actions/filters';
import moment from 'moment';

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
});

test('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
});

test('should generate set text filter with inpiut value ', () => {
  const action = setTextFilter('bear');
  expect(action).toEqual({
    type: 'SET_TEXTFILTER',
    text: 'bear'
  })
});

test('should generate set text filter with default value ', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXTFILTER',
    text: 'Bill'
  })
});

test('should set sort By Date ', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE',
  })
});

test('should set sort By amount ', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT',
  })
});