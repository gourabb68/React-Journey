import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import React from 'react';
import AddExpensePage from "../components/AddExpensePage";
import ExpenseDashboradPage from "../components/ExpenseDashboardPage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import EditExpensePage from "../components/EditExpensePage";
import LoginPage from '../components/LoginPage'
import PrivateRoute from './PrivateRouter';
import createHistory from 'history/createBrowserHistory';
export const history = createHistory();
import PublicRoute from'./PublicRoute';
const ApRouter = ()=>{
    return (
<Router history={history}>
     <div>         
         <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true}/>
        <PrivateRoute path="/dashboard" component={ExpenseDashboradPage} exact={true}/>
        <PrivateRoute path="/create" component={AddExpensePage}/>
        <PrivateRoute path="/edit/:id" component={EditExpensePage}/>
        <PrivateRoute path="/help" component={HelpPage}/>
        <PrivateRoute  component={NotFoundPage}/>
        </Switch>
     </div>
     </Router>
    );
}


export default ApRouter;