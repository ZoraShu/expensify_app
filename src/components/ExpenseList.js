import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/selectExpenses';
export const ExpenseList = (props) => (
  <div>
  {
    props.expenses.length === 0 ? (
      <p>No expenses</p>
    ) : (
        props.expenses.map((expense) => {
          return <ExpenseListItem {...expense} key={expense.id}/>
      })
    )
  }
   
  </div>
);

const mapStateToPorps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToPorps)(ExpenseList);
