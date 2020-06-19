import uuid from 'uuid';
import database from '../firebase/firebase';
//ADD_EXPENSE
export const addExpense = (expense) => ({
        type: 'ADD_EXPENSE',
        expense

    })
///ADD EXPENSE WITH FIREBAS FUNCTION
export const startAddExpense =(
    {//setting up default
        description = '',
        note = '',
        amount = 0,
        createdAt = 0 }
) =>{
  
    //returning action gen function
    return (dispatch)=>{
      ///saving data in firebase
   const expense ={description,note,amount,createdAt};
   return database
     .ref('expenses')
    .push(expense)
    .then((ref)=>{
        //when promise resolved we will dispatch
        //we are dispatching function from component and 
        //in that function we are dispatching the action object
        dispatch(addExpense({
            id: ref.key,
            ...expense
            }))
    })
    }
}
//REMOVE_EXPENSE_BY_ID
export const removeExpense = ({id}  = {}) => ({
    type: 'REMOVE_EXPENSE',
    id

})

export const startRemoveExpense = ({id}={})=>{
  return (dispatch)=>{
    return  database.ref(`expenses/${id.id}`)
    .remove() 
      .then(()=> {
        //   console.log({id})
        dispatch(removeExpense(id))
      })
    
  }
}


//EDIT_EXPENSE
export const editExpense = (id, update) => ({
    type: 'EDIT_EXPENSE',
    id,
    update
})

//set expenses
export const setExpenses=(expenses)=>({
    type: 'SET_EXPENSE',
    expense: expenses
});

export const startSetExpenses =()=>{
    return (dispatch)=>{

    return  database.ref('expenses')
   .once('value')
   .then((snapshot)=>{
       const expenses = [];
       snapshot.forEach((childNote)=>{
           expenses.push({
               id: childNote.key,
               ...childNote.val()
           })
       });
       dispatch(setExpenses(expenses))
     })
    }
    


};
