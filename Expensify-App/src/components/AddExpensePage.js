import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import { addExpense} from '../actions/expenses'
const AddExpensePage = (props) =>{
    console.log(props);
    return (
        <div>
            <h1>Add Expense</h1>
        <ExpenseForm 
        onSubmit={(expenses)=>{
            props.dispatch(addExpense(expenses));
            props.history.push('/');//switch me to the dashboard page
        }}
        />
         
    </div>
    );
 
};

export default connect()(AddExpensePage);
