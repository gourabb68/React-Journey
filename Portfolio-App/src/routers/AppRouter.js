import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import React from 'react';
import HomePage from "../components/HomePage";
import ContactPage from "../components/ContactPage";
import Header from "../components/Header";
import PortfolioPage from "../components/PortfolioPage";
import PortfolioPageId from "../components/PortfolioPageId";
import NotFoundPage from "../components/NotFoundPage";
// import EditExpensePage from "../components/EditExpensePage";
const ApRouter = ()=>{
    return (
<BrowserRouter>
     <div>
         <Header />
         <Switch>
        <Route path="/" component={HomePage} exact={true}/>
        <Route path="/contact" component={ContactPage}/>
        <Route path="/portfolio/:id" component={PortfolioPageId}/>
        <Route path="/portfolio" component={PortfolioPage}/>
        
        <Route  component={NotFoundPage}/>
        </Switch>
     </div>
     </BrowserRouter>
    );
}


export default ApRouter;