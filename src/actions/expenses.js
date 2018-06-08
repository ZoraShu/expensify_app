import uuid from 'uuid';
// ADD_EXPENSE action
export const addExpense = (
  { 
    description = '', 
    note= '', 
    amount = 0, 
    createdAt = 10,
  } = {})=> ({
    
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

//REMOVE_EXPENSE
export const removeExpense = ({id}) => ({
  type : 'REMOVE_EXPENSE',
  id
});

//EDIT_EXPENSE
export const editExpense = ({id}, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates //如果传入的值是{} ，上面没有声明，那么会继续吧{} 传下去，直到展开或者deconstructor
});

