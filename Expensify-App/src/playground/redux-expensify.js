import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
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
const addExpense = ({
    description = '',
    note = '',
    amount = 0,
    createdAt = 0 }) => ({
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt,

        }

    })
//REMOVE_EXPENSE_BY_ID
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id

})
//EDIT_EXPENSE
const editExpense = (id, update) => ({
    type: 'EDIT_EXPENSE',
    id,
    update
})
//SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});
//SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})
//SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})
//SET_START_DATE
const setStartDate =(startDate)=>({
  type: 'SET_START_DATE',
  startDate
})
//SET_END_DATE
const setEndDate =(endDate)=>({
    type: 'SET_END_DATE',
    endDate
  })
//EXPENSES REDUCER
//variable for default state value
const expenseReducerDefaultState = [];
const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense] //spread operator
        //   state.concat(action.expense)
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return { ...expense, ...action.update }
                } else {
                    return expense;
                };
            })

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
const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };

        case 'SORT_BY_AMOUNT':
            return {
                ...state, sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state, sortBy: 'date'
            };
            case 'SET_START_DATE':
            return {
                ...state, startDate : action.startDate
            };
            case 'SET_END_DATE':
               return  {
                    ...state, startDate : action.endDate
                }
        default:
            return state;

    }
}

//Get visible Expenses for filter and sort
const getVisibleExpense= (expenses,{text,sortBy,startDate,endDate})=>{
    return expenses.filter((expenses)=>{
        
        const startDateMatch =typeof startDate !== 'number' || expenses.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expenses.createdAt <= endDate;
        //if expense.desc has string variable inside in tit
        const textMatch =typeof text !=='string' || expenses.description.toLowerCase().includes(text);
        
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if(sortBy=== 'date'){
            return a.createdAt < b.createdAt ? 1 :-1;
        }else if(sortBy=== 'amount'){
            return a.amount < b.amount ? 1 :-1;
        }
    })
};

///store creating
const store = createStore(
    combineReducers({
        expenses: expenseReducer, //manage by expensesReducer
        filters: filterReducer

    })
);
store.subscribe(() => {
    const state = store.getState();
    const visibleExpense =getVisibleExpense(state.expenses,state.filters);
    console.log(visibleExpense);
})

const expenseOne = store.dispatch(addExpense({ description: 'rent', amount: 5, createdAt:-2000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'coffee', amount: 50 ,createdAt :-250}));
store.dispatch(removeExpense({ id: expenseTwo.expense.id }));
store.dispatch(editExpense(expenseOne.expense.id, { amount: 500 }));
store.dispatch(setTextFilter('re'));//searching for rent
store.dispatch(setStartDate(125));//get filter data by date
store.dispatch(setEndDate(225));
store.dispatch(sortByAmount());
store.dispatch(sortByDate());
// spread object operator
const obj = {
    name: 'john',
    age: 52
}
console.log({ ...obj, weight: 55, age: 65 })
