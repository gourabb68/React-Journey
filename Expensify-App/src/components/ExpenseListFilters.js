import React from 'react';
import {connect} from 'react-redux';
//we need setTextFilter action to dispatch to redux store
import {setTextFilter,sortByAmount,sortByDate, setStartDate,setEndDate} from '../actions/filters';
import {DateRangePicker} from 'react-dates';
class ExpenseListFilters extends React.Component{
    state ={
        calenderFocused: null,

    }
    onDatesChange = ({ startDate, endDate }) => {
        if(startDate){
            console.log('start'+startDate);
            this.props.dispatch(setStartDate(startDate));
        }
        if(endDate){
            console.log('end'+endDate);
            this.props.dispatch(setEndDate(endDate));
        }
      
        
      };
      onFocusChange = (calenderFocused) => {
        this.setState(() => ({ calenderFocused }));
      }
    render(){
        return (
        <div>
        <input type='text' value ={this.props.filters.text} onChange={(e)=>{
            //we have dispatch option available as we connect to redux store
            this.props.dispatch(setTextFilter(e.target.value));//passing value given by user in text file                  
        }}/> 
        <select onChange={(e)=>{
            console.log(e.target.value)
            if(e.target.value==='date')
            {
             props.dispatch(sortByAmount());
            }else if(e.target.value==='amount'){
             this.props.dispatch(sortByDate());
            }
        }}>
            <option value='date'>Date</option>
            <option value='amount'>Amount</option>
        </select>
        <DateRangePicker
        startDate={this.props.filters.startDate}
        endDate={this.props.filters.endDate}
        onDatesChange={this.onDatesChange}
        focusedInput={this.state.calenderFocused}
        onFocusChange={this.onFocusChange}
        showClearDates={true}
        numberOfMonths={1}
        isOutsideRange={() => false}
        
        
        />
    </div>
        );
    }
}

const mapStateToProps =(state)=>{
    return {
            filters: state.filters
    }
}
export default connect(mapStateToProps)(ExpenseListFilters);