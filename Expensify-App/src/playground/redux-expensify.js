import {createStore, combineReducers} from 'redux';

// complex state structure
const demoState = {
    expenses: [{
        id: 'abcdef',
        description: 'januray rent',
        note: 'This was the final payment',
        amount: 54220,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',//date or amount
        startDate: undefined,
        endDate: undefined
    }
}
//ADD_EXPENSE
//REMOVE_EXPENSE
//EDIT_EXPENSE
//SET_TEXT_FILTER
//SORT_BY_DATE
//SORT_BY_AMMOUNT
//SET_START_DATE
//SET_END_DATE

//EXPENSES REDUCER
//variable for default state value
const expenseReducerDefaultState =[];
const expenseReducer =(state = expenseReducerDefaultState, action)=>{
    switch(action.type){
        default:
            return state;
    }

};

//FILTER REDUCER
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',//date or amount
    startDate: undefined,
    endDate: undefined

};
const filterReducer =(state =filterReducerDefaultState , action)=>{
    switch(action.type){
        default:
            return state;
    }
}

///store creating
const store = createStore(
    combineReducers({
        expenses: expenseReducer, //manage by expensesReducer
        filters: filterReducer
        
    })
    );
console.log(store.getState());
