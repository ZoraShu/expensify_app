//EXPENSE_REDUCER

const expenseReducerDefaultState = []
const expenseReducer = (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE' :
      return [...state, action.expense]; // 等同于 expenses.concat(action.expense) 不能用push 不能改变原来的state 而是返回一个新的state
    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => id !== action.id);
    case 'EDIT_EXPENSE' :
      return state.map((expense) => {

        if (expense.id === action.id) {
          //do update 
          console.log('try to do something')
          console.log(...action.updates)
          return {
            ...expense,
            ...action.updates
          };

        } else {
          return expense;
        }
      });  
    default:
      return state;
  }
}

export default expenseReducer;