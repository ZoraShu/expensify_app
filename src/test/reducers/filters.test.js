import filtersReducers from '../../reducers/filters';
import moment from 'moment';
test('should setup default filter values', () => {
  const state = filtersReducers(undefined, {type:'@@INIT'});
  expect(state).toEqual({
    text:'',
    sortBy:'date',
    startDate: moment().startOf('month'),
    endDate:moment().endOf('month')
  });
});


test('should set sortBy to amount', () => {
  const state = filtersReducers(undefined, {type:'SORT_BY_AMOUNT'});
  expect(state.sortBy).toBe('amount');
});


test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
  }
  const state = filtersReducers(currentState, {type:'SORT_BY_DATE'});
  expect(state.sortBy).toBe('date');
});


test('should set text filter', () => {
  const state = filtersReducers(undefined, {type:'SET_TEXTFILTER', text:'bar'});
  expect(state.text).toBe('bar');
});


test('should set start date filter', () => {
  const state = filtersReducers(undefined, {type:'SET_START_DATE', startDate: moment(0).add(3, 'days').valueOf()});
  expect(state.startDate).toBe(moment(0).add(3, 'days').valueOf());
});


test('should set end date filter', () => {
  const state = filtersReducers(undefined, {type:'SET_END_DATE', endDate: moment(0).add(3, 'days').valueOf()});
  expect(state.endDate).toBe(moment(0).add(3, 'days').valueOf());
});