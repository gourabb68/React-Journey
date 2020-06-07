
import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
const ExpenseDashboradPage = () =>{
    return (
        <div>
            <ExpenseListFilters />
            <ExpenseList />
    </div>
    );
 
};
export default ExpenseDashboradPage;