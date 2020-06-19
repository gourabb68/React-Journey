import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm'
import {startEditExpense} from '../actions/expenses';
import {startRemoveExpense} from '../actions/expenses';


export class EditExpensePage extends React.Component{
    onSubmit = (expenses)=>{                   
            this.props.startEditExpense(this.props.expenses.id,expenses);
           this.props.history.push('/');//switch me to the dashboard page      
    };

    onRemove = ()=>{
               
        this.props.startRemoveExpense({id:this.props.expenses.id});
        this.props.history.push('/');
    }

    render(){
        return(
            <div>
            
            
            <ExpenseForm 
            expenses={this.props.expenses}
            onSubmit={this.onSubmit}
            />
              <button onClick={this.onRemove}>Remove </button>
              
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
