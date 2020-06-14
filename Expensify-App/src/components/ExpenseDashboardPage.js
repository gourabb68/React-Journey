
import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';
const ExpenseDashboradPage = () =>{
    return (
        <div>
            <ExpensesSummary />
            <ExpenseListFilters />
            <ExpenseList />
    </div>
    );
 
};
export default ExpenseDashboradPage;