import React from 'react';
//use to connect redux store with component
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses'
export const  ExpenseList = (props) =>{
    return (
       
        <div>
        
      
       {props.expenses.length? <h1>ExpenseList</h1>: <h1>No Expense</h1>}
       {props.expenses.map((expense)=>{
           return <ExpenseListItem key={expense.id}{...expense}/>
       })
       }
    </div>
    );
   
}
//creating higher order component using connect
//like we have our own function and passing regular component
// const ConnectedExpensesList connect(here we have to pass function that 
// return object which is subset of store means what info we need to c
// onnect from store)(pass regular component to make higer order component)
//one way
// const ConnectedExpensesList= connect((state)=>{//this return object can be accessed through props of regular comp
//     return {
//         expenses: state.expenses
//     };
// })(ExpenseList)
//advance way
//creating a funciton explicitly to get data from store
const mapStateToComponent = (state)=>{//this return object can be accessed through props of regular comp
    return {
        expenses: selectExpenses(state.expenses,state.filters)
        
    };
}
const ConnectedExpensesList= connect(mapStateToComponent)(ExpenseList)




export default ConnectedExpensesList; 