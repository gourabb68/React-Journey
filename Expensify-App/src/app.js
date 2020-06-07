import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
// import createBrowserHistory from 'history/createBrowserHistory';
import 'normalize.css/normalize.css/'
import "./styles/styles.scss"
import AppRouter from './routers/AppRouter';//getting router file
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
const store = configureStore();

store.dispatch(addExpense({description: 'water bill'}))
store.dispatch(addExpense({description: 'gas bill'}))
store.dispatch(setTextFilter('gas'));
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
console.log(visibleExpenses);
ReactDOM.render(<AppRouter />, document.getElementById('app'));
