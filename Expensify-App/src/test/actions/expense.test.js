//need access of expense action generator
import {startAddExpense,addExpense, editExpense, removeExpense} from '../../actions/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const expense =  [{
    id: 'abcdef',
    description: 'januray rent',
    note: 'This was the final payment',
    amount: 54200,
    createdAt: 0
  }]
const createMockStore = configureMockStore([thunk]);

test('should. add expense to data base and store',(done)=>{
    const  store = createMockStore();
    const expenseData ={
    description: 'mouse',
    amount: 200,
    note: 'This is better',
    createdAt: 1000
  }
  //promise chaning waiting for firebase insertion

    store.dispatch(startAddExpense(expenseData)).then(()=>{
        const actions =store.getActions();
        expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            id: expect.any(String),
            ...expenseData
        }
    })
    //we have to tell jest the test is asynchronous will not wait
    done();//done is to force jest on a specific point
    })
    
})

//Testing for addExpense
test('should. set up add expense action object',() =>{    
    //for object or array we will use toEqual
 /// for boolean or number we will use toBe
 const action =addExpense(expense[0]);
     expect(action).toEqual({
         type: 'ADD_EXPENSE',
         expense: expense[0]
         });
   
});

//Testing for RemoveExpense
test('should. set up remove expense action object',() =>{
    //for object or array we will use toEqual
    /// for boolean or number we will use toBe
    const action =removeExpense({id: '123abc'});
    
        expect(action).toEqual({
                type: 'REMOVE_EXPENSE',
                id: '123abc'
            });
      
});

//Testing for EditExpense
test('should. set up edit expense action object',() =>{    
    const action =editExpense('123abc',{description: 'Electric Bill'});
        expect(action).toEqual({
                type: 'EDIT_EXPENSE',
                id: '123abc',
                update :{
                    description: 'Electric Bill'
                }
            });
      
});


// //Testing for addExpense for default value 
// test('should set up add expense action object',() =>{    
//     //for object or array we will use toEqual
//  /// for boolean or number we will use toBe
//  const action =addExpense({id: '',description: '',note:'',amount:0,createdAt:0});
//      expect(action).toEqual({
//          type: 'ADD_EXPENSE',
//          expense: {
//              id:'',//as id is a dynamic value so we 
//              // only check the type don't care about the Value
//              description: '',
//              note: '',
//              amount: 0,
//              createdAt: 0
 
//          }
//          });
   
// });