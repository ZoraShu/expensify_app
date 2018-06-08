import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  }
  onClick = () => {
    this.props.removeExpense({id : this.props.expense.id});
    this.props.history.push('/')
  }
  render() {
    return (
      <div>
        <ExpenseForm 
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onClick}>
        Remove</button>  
      </div>
    )
  }
};
//we want to find the correspond expense and pass it as props to the page
//here first state is the state for store, second is the props of editExpensePage
const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  }; 
};

const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (id, updates) => dispatch(editExpense(id, updates)),
  removeExpense: (data) => dispatch(removeExpense(data))
})
 
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);

