import expenseReducer from '../../reducers/expenses';
import {addExpense, removeExpense, editExpense} from '../../actions/expenses'

test('Should set default state',()=>{
    const state =expenseReducer(undefined,{type: '@@INIT'})
    expect(state).toEqual([]);
});

const defaultState ={
    description : '',
    note : '',
    amount : 0,
    createdAt : 0 };
// add expense............
test('Should be ADD EXPENSE',()=>{
    const addState ={
        description : 'Rent',
        note : '',
        amount : 200,
        createdAt : 0 }
    const action = addExpense(addState);
    console.log('action'+ action)
    const state =expenseReducer(defaultState,action);
    console.log('state'+ state)
    expect(state).toEqual([{
        id: expect.any(String),
        description : 'Rent',
        note : '',
        amount : 200,
        createdAt : 0 
    }])
})
///Edit expense ........
test('Should be EDIT EXPENSE',()=>{

    const addedState =[{
        id: '123abc',
        description : '',
        note : '',
        amount : 0,
        createdAt : 0 }];
    const editState ={
        description : 'gym',
        note : '',
        amount : 400,
        createdAt : 0 }
    const action = editExpense('123abc',editState);
    const state = expenseReducer(addedState,action);
    expect(state).toEqual([{
        id: expect.any(String),
        description : 'gym',
        note : '',
        amount : 400,
        createdAt : 0 
    }])
})

//remove expense .....
test('Should be REMOVE EXPENSE',()=>{

    const addedState =[{
        id: '123abc',
        description : 'Swiming',
        note : '',
        amount : 200,
        createdAt : 0 },
        {
            id: '456def',
            description : 'Elect',
            note : '',
            amount : 300,
            createdAt : 0 }];
 
    const action = removeExpense({id:'123abc'});
    const state = expenseReducer(addedState,action);
    expect(state).toEqual([addedState[1]])
})