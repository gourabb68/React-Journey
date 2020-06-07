import React from 'react';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenses';
//first value is dispatch
const ExpenseListItem = ({dispatch, description,amount,createdAt,id})=>{
    return (
      <div>
          <h3>{description}</h3>
          <p>{amount} - {createdAt}</p>
          {/* //creating button to remove expense} */}
          <button onClick={()=>{
            console.log(id);
          dispatch(removeExpense({id}))
          }}>Remove </button>
      </div>
    );
}


export default connect()(ExpenseListItem);