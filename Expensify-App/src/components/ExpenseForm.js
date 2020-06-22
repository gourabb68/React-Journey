import React from 'react';
////moment for working with  date 
import moment from 'moment';
//import date picker library
import {SingleDatePicker} from 'react-dates';
//import cssfile for date picker library
// import 'react-dates/lib/css/_datepicker.css';
const now = moment();
// console.log(now)//get moment object
//get date
// console.log(now.format('MMM Do, YYYY'))//Jun 8th, 2020

class ExpenseForm extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            description: props.expenses? props.expenses.description: '',
            note: props.expenses? props.expenses.note:'',
            amount: props.expenses?(props.expenses.amount/100).toString():'',
            createdAt: props.expenses?moment(props.expenses.createdAt):moment(),
            calenderFocused: false,
            error: ''
        }
    }

onDescriptionChange =(e) =>{
    const description = e.target.value;
    this.setState(()=>({description}))
}
onNoteChange =(e)=>{
    const note = e.target.value;
    this.setState(()=>({note}))

}
onAmountChange =(e)=>{
    const amount = e.target.value;
    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){ //copy paste reg expression between // 
        //!amount if for if user can delete the amount
        //creating regular expression to allow user take 
        //two value after decimal like 55.55 not 55.5555
    this.setState(()=>({amount}))
    }
}
///https://github.com/airbnb/react-dates go to single date picker
onDateChange =(createdAt) =>{
    if(createdAt){
   this.setState(()=> ({createdAt}))
    }
};

onFocusChange = ({focused})=>{
   this.setState(()=>({calenderFocused : focused}))
};
onSubmit = (e)=>{
    //prevent from full page refresh
    e.preventDefault();
    if(!this.state.description || !this.state.amount){
        this.setState(()=>({error: 'Please provide Description and amount'}))
        //set error state equal to 'Please provide dec and amount
        // console.log(this.state.error)
    }else{
        this.setState(()=>({error: ''}))
        this.props.onSubmit({
            description: this.state.description,
            amount: parseFloat(this.state.amount,10)*100, //convert string to no
            createdAt: this.state.createdAt.valueOf() ,//moment to unix timestamp
            note: this.state.note
        })
    }
}
    render(){
        return (
                <form className="form" onSubmit={this.onSubmit}>
                 {this.state.error && <p className="form__error">{this.state.error}</p>}
                    <input className="text-input" type='text'
                    placeholder='Description'
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange}/>

                    <input className="text-input" type='number'
                    placeholder='Amount'
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                    />

                    <textarea className="textarea" placeholder=
                    'Add a note for your expense'
                    value={this.state.note}
                    onChange={this.onNoteChange}>
                        
                 

                    </textarea>
                   
                    {/* {console.log(this.state.amount)} */}

                    <SingleDatePicker
                    date ={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused = {this.state.calenderFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1} //showing no of month in calender
                    isOutsideRange= {() => false} //it will make every single day available for us like past
                    />
                    <div >
                     <button className="button">Save Expense</button>
                     </div>
                </form>
        );
    }
}
export default ExpenseForm;