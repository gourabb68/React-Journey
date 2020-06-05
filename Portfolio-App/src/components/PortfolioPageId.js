
import React from 'react';
import {Link, NavLink} from 'react-router-dom';
const PortfolioPageId = (props) =>{
    return (
        <div>
            <h1>A think I have Done</h1>
    <p>The page is for item {props.match.params.id}</p>
            
    </div>
    );
 
};
export default PortfolioPageId;