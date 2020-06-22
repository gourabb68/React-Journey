import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import { startAddExpense} from '../actions/expenses';


export class AddExpensePage extends React.Component {
    onSubmit=(expenses)=>{
        // props.dispatch(addExpense(expenses));
        this.props.startAddExpense(expenses);
        this.props.history.push('/');//switch me to the dashboard page
    }
    render (){
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                         <h2 className="page-header__title1">Add Expense</h2>
                         </div>
                         </div>
                   <div className="content-container">
                     <ExpenseForm 
                      onSubmit={this.onSubmit}
                    // onSubmit={(expenses)=>{
                    //     // props.dispatch(addExpense(expenses));
                    //     this.props.onSubmit(expenses);
                    //     this.props.history.push('/');//switch me to the dashboard page
                    // }}
                    />
                    </div>
                     
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
    startAddExpense: (expenses)=> dispatch(startAddExpense(expenses))
})

export default connect(undefined,mapDispatchToProps)(AddExpensePage);

