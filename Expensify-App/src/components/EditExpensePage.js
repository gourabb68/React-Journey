import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm'
import {editExpense} from '../actions/expenses';
import {removeExpense} from '../actions/expenses'
const EditExpensePage = (props) =>{
    console.log(props);
    return (
        <div>
            
        this is from my EditExpensePage page {props.match.params.id}
        <ExpenseForm 
        expenses={props.expenses}
        onSubmit={(expenses)=>{
            
             props.dispatch(editExpense(props.expenses.id,expenses));
            props.history.push('/');//switch me to the dashboard page
        }}
        />
          <button onClick={()=>{
           
          props.dispatch(removeExpense({id:props.expenses.id}));
          props.history.push('/');
          }}>Remove </button>
          
    </div>
    );
 
};

const mapStoreToProps =(state,props)=>{
return {
    expenses: state.expenses.find((expense)=>{
        return expense.id === props.match.params.id;
    })
};
}
export default connect(mapStoreToProps)(EditExpensePage);
