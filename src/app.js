// install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import selectExpenses from './selectors/selectExpenses';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';
import 'normalize.css/normalize.css'


const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 450, createdAt: -100}));
store.dispatch(addExpense({ description: 'Gas bill', amount: 1000, createdAt: 1000}));
store.dispatch(addExpense({ description: 'Rent', amount: 109500, createdAt:100}));


const state = store.getState();
const visiableExpense = selectExpenses(state.expenses, state.filters);
console.log(visiableExpense);
// setTimeout(() => {
//   store.dispatch(setTextFilter('bill'));
// }, 3000)

console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'));






