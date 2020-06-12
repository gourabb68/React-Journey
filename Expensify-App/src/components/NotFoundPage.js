import React from 'react';
import {Link, NavLink} from 'react-router-dom';
const NotFoundPage =()=>{
    return (
       <div>404!
           <NavLink to="/" activeClassName="is-active"> Go Home </NavLink>               
       </div>
    );
}
export default NotFoundPage;