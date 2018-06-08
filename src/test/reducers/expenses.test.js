import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const state = expensesReducer(expenses, {type: 'REMOVE_EXPENSE', id: expenses[1].id});
  expect(state).toEqual([expenses[0],expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const state = expensesReducer(expenses, {type: 'REMOVE_EXPENSE', id: -1});
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const toAdd = {
    description:'cat',
    amount: 14,
    createdAt: 100,
    note: 'buy a cat'
  }
  const state = expensesReducer(expenses, {type: 'ADD_EXPENSE', expense: toAdd});
  expect(state).toEqual([...expenses, toAdd]);
});

test('should edit an expense', () => {
  const toEDIT = {
    amount: 13,
  }
  const state = expensesReducer(expenses, {type: 'EDIT_EXPENSE', id:expenses[1].id, updates: toEDIT});
  expect(state[1].amount).toBe(toEDIT.amount);
});


test('should not edit an expense if id is not found', () => {
  const toEDIT = {
    amount: 13,
  }
  const state = expensesReducer(expenses, {type: 'REMOVE_EXPENSE', id:-1});
  expect(state).toEqual(expenses);
});