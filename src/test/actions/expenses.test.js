import {addExpense, removeExpense, editExpense} from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense({id: '123abc'});
  //toBe is 比较两个primitive
  //toEqual 会比较object
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should setup EDIT expense action object', () => {
  const action = editExpense({id: '123abc'}, {note:'New note value'});
  //toBe is 比较两个primitive
  //toEqual 会比较object
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'New note value'
    }
  });
});

test('should setup ADD expense action object with default value', () => {
  const action = addExpense();
  //toBe is 比较两个primitive
  //toEqual 会比较object
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description : '',
      note:'',
      amount:0,
      createdAt:10
    }
  });
});

test('should setup ADD expense action object with input value', () => {
  const expense = {
    description : 'bear', 
    note : 'see ber', 
    amount : 10, 
    createdAt : 10000,
  };

  const action = addExpense(expense);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expense,
      id: expect.any(String)
    }
  });
});