import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm'
import {startEditExpense} from '../actions/expenses';
import {startRemoveExpense} from '../actions/expenses';


export class EditExpensePage extends React.Component{
    onSubmit = (expenses)=>{                   
            this.props.startEditExpense(this.props.expenses.id,expenses);
           this.props.history.push('/dashboard');//switch me to the dashboard page      
    };

    onRemove = ()=>{
               
        this.props.startRemoveExpense({id:this.props.expenses.id});
        this.props.history.push('/dashboard');
    }

    render(){
        return(
            <div>
            <div className="page-header">
            <div className="content-container">
               <h2 className="page-header__title1">Edit Expense</h2>
            </div>
            </div>
            <div className="content-container">
            <ExpenseForm 
            expenses={this.props.expenses}
            onSubmit={this.onSubmit}
            />
              <button className="button button__secondary" onClick={this.onRemove}>Remove Expense</button>
              </div>
        </div>
        )
    }
}

const mapDispatchToProps =(dispatch,props) =>({
   
    startEditExpense: (id,expenses)=>dispatch(startEditExpense(id,expenses)),
    startRemoveExpense: (id)=> dispatch(startRemoveExpense({id}))
    
})

const mapStoreToProps =(state,props)=>{
return {
    expenses: state.expenses.find((expense)=>{
        return expense.id === props.match.params.id;
    })
};
}
export default connect(mapStoreToProps,mapDispatchToProps)(EditExpensePage);
