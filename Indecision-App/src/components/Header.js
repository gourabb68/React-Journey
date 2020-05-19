import React from 'react';
const Header =(props)=>{
  
    return (
        <div>
            <h1>{props.title}</h1>
            <h1>{props.subtitle}</h1>
        </div>
    );

}
Header.defaultProps ={
    "title": 'Indecision App '
}

export default Header;