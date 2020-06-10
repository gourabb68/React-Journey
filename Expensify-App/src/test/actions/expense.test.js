//need access of expense action generator
import {addExpense, editExpense, removeExpense} from '../../actions/expenses';



//Testing for RemoveExpense
test('should set up remove expense action object',() =>{
    //for object or array we will use toEqual
    /// for boolean or number we will use toBe
    const action =removeExpense({id: '123abc'});
    
        expect(action).toEqual({
                type: 'REMOVE_EXPENSE',
                id: '123abc'
            });
      
});

//Testing for EditExpense
test('should set up edit expense action object',() =>{    
    const action =editExpense('123abc',{description: 'Electric Bill'});
        expect(action).toEqual({
                type: 'EDIT_EXPENSE',
                id: '123abc',
                update :{
                    description: 'Electric Bill'
                }
            });
      
});

//Testing for addExpense
test('should set up add expense action object',() =>{    
       //for object or array we will use toEqual
    /// for boolean or number we will use toBe
    const action =addExpense({description: 'Electric Bill',note:'',amount:20,createdAt:120});
        expect(action).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),//as id is a dynamic value so we 
                // only check the type don't care about the Value
                description: 'Electric Bill',
                note: '',
                amount: 20,
                createdAt: 120
    
            }
            });
      
});
//Testing for addExpense for default value 
test('should set up add expense action object',() =>{    
    //for object or array we will use toEqual
 /// for boolean or number we will use toBe
 const action =addExpense({description: '',note:'',amount:0,createdAt:0});
     expect(action).toEqual({
         type: 'ADD_EXPENSE',
         expense: {
             id: expect.any(String),//as id is a dynamic value so we 
             // only check the type don't care about the Value
             description: '',
             note: '',
             amount: 0,
             createdAt: 0
 
         }
         });
   
});