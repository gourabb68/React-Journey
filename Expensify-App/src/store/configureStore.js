import { createStore, combineReducers,applyMiddleware,compose } from 'redux';
import expenseReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth'
export default ()=>{
const componseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;
///store creating
const store = createStore(
    combineReducers({
        expenses: expenseReducer, //manage by expensesReducer
        filters: filterReducer,
        auth: authReducer

    }),
    componseEnhancers(applyMiddleware(thunk))
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
  return store;
}
