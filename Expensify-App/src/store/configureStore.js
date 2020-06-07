import { createStore, combineReducers } from 'redux';
import expenseReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';

export default ()=>{

///store creating
const store = createStore(
    combineReducers({
        expenses: expenseReducer, //manage by expensesReducer
        filters: filterReducer

    })
);
  return store;
}
