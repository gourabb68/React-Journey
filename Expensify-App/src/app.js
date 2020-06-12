import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
// import createBrowserHistory from 'history/createBrowserHistory';
import 'normalize.css/normalize.css/'
import "./styles/styles.scss"
import AppRouter from './routers/AppRouter';//getting router file
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({description: 'water bill', amount: 5520,createdAt: 20}))
store.dispatch(addExpense({description: 'gas bill',amount: 552,createdAt: 30}))
store.dispatch(addExpense({description: 'electric bill',amount: 6000,createdAt: 10}))
store.dispatch(setTextFilter('bill'));
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
console.log(visibleExpenses);

//passing root component inside provider
//means all component now do have access to store
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
    
);
ReactDOM.render(jsx, document.getElementById('app'));

