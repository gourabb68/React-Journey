
import React from 'react';
import {Link, NavLink} from 'react-router-dom';
const PortfolioPage = () =>{
    return (
        <div>
            <h1>Portfolio</h1>
            <p>Check out the following thing I have done</p>
            <NavLink to="/portfolio/1" activeClassName="is-active">Item One</NavLink>
            <NavLink to="/portfolio/2" activeClassName="is-active">Item Two</NavLink>
    </div>
    );
 
};
export default PortfolioPage;