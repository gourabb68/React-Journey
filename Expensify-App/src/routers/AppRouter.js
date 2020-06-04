import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import React from 'react';
const ExpenseDashboradPage = () =>{
    return (
        <div>
        this is from my dashboard page
    </div>
    );
 
};
const AddExpensePage = () =>{
    return (
        <div>
        this is from my AddExpensePage page
        <NavLink to="/" activeClassName="is-active" exact={true}> Go Home </NavLink>           
        <NavLink to="/help" activeClassName="is-active">Help Page</NavLink>
        <NavLink to="/create"activeClassName="is-active">Create Page</NavLink>
         
    </div>
    );
 
};
const HelpPage =()=>{
    return (
       <div>Help 
           <Link to="/">Home Page</Link>
           <NavLink to="/" activeClassName="is-active"> Go Home </NavLink>           
        <NavLink to="/help" activeClassName="is-active">Help Page</NavLink>
        <NavLink to="/create"activeClassName="is-active">Create Page</NavLink>
         
       </div>
    );
}
const NotFoundPage =()=>{
    return (
       <div>404!
           <NavLink to="/" activeClassName="is-active"> Go Home </NavLink>           
        <NavLink to="/help" activeClassName="is-active">Help Page</NavLink>
        <NavLink to="/create"activeClassName="is-active">Create Page</NavLink>
         
       </div>
    );
}

const Header =() =>{
   return (
    <header>
    <h1>Expensify</h1>
    </header>
   ); 
};

const ApRouter = ()=>{
    return (
<BrowserRouter>
     <div>
         <Header />
         <Switch>
        <Route path="/" component={ExpenseDashboradPage} exact={true}/>
        <Route path="/create" component={AddExpensePage}/>
        <Route path="/help" component={HelpPage}/>
        <Route  component={NotFoundPage}/>
        </Switch>
     </div>
     </BrowserRouter>
    );
}


export default ApRouter;