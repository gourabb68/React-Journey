import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import React from 'react';
import AddExpensePage from "../components/AddExpensePage";
import ExpenseDashboradPage from "../components/ExpenseDashboardPage";
import Header from "../components/Header";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import EditExpensePage from "../components/EditExpensePage";
import LoginPage from '../components/LoginPage'
import createHistory from 'history/createBrowserHistory';
export const history = createHistory();
const ApRouter = ()=>{
    return (
<Router history={history}>
     <div>
         <Header />
         <Switch>
        <Route path="/" component={LoginPage} exact={true}/>
        <Route path="/dashboard" component={ExpenseDashboradPage} exact={true}/>
        <Route path="/create" component={AddExpensePage}/>
        <Route path="/edit/:id" component={EditExpensePage}/>
        <Route path="/help" component={HelpPage}/>
        <Route  component={NotFoundPage}/>
        </Switch>
     </div>
     </Router>
    );
}


export default ApRouter;