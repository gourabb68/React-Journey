import React from 'react';
import {connect} from 'react-redux';
//we need setTextFilter action to dispatch to redux store
import {setTextFilter,sortByAmount,sortByDate} from '../actions/filters';
const ExpenseListFilters = (props) =>{
    return (
   <div>
       <input type='text' value ={props.filters.text} onChange={(e)=>{
           //we have dispatch option available as we connect to redux store
           props.dispatch(setTextFilter(e.target.value));//passing value given by user in text file                  
       }}/> 
       <select onChange={(e)=>{
           console.log(e.target.value)
           if(e.target.value==='date')
           {
            props.dispatch(sortByAmount());
           }else if(e.target.value==='amount'){
            props.dispatch(sortByDate());
           }
       }}>
           <option value='date'>Date</option>
           <option value='amount'>Amount</option>
       </select>
   </div>
    );
};

const mapStateToProps =(state)=>{
    return {
            filters: state.filters
    }
}
export default connect(mapStateToProps)(ExpenseListFilters);