import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import { addExpense} from '../actions/expenses';


export class AddExpensePage extends React.Component {
    onSubmit=(expenses)=>{
        // props.dispatch(addExpense(expenses));
        this.props.addExpense(expenses);
        this.props.history.push('/');//switch me to the dashboard page
    }
    render (){
        return (
            <div>
                         <h1>Add Expense</h1>
                     <ExpenseForm 
                      onSubmit={this.onSubmit}
                    // onSubmit={(expenses)=>{
                    //     // props.dispatch(addExpense(expenses));
                    //     this.props.onSubmit(expenses);
                    //     this.props.history.push('/');//switch me to the dashboard page
                    // }}
                    />
                     
                </div>
        )
    }
}
// const AddExpensePage = (props) =>{
//     console.log(props);
//     return (
//         <div>
//             <h1>Add Expense</h1>
//         <ExpenseForm 
//         onSubmit={(expenses)=>{
//             // props.dispatch(addExpense(expenses));
//             props.onSubmit(expenses);
//             props.history.push('/');//switch me to the dashboard page
//         }}
//         />
         
//     </div>
//     );
 
// };


const mapDispatchToProps =(dispatch) =>({
    addExpense: (expenses)=> dispatch(addExpense(expenses))
})

export default connect(undefined,mapDispatchToProps)(AddExpensePage);

