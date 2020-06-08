import { createStore, combineReducers } from 'redux';
import expenseReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';

export default ()=>{

///store creating
const store = createStore(
    combineReducers({
        expenses: expenseReducer, //manage by expensesReducer
        filters: filterReducer

    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
  return store;
}
