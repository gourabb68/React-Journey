import React from 'react';
const Header =(props)=>{
  
    return (
        <div className="header">
            <div className="container">
            <h1 className="header__tittle">{props.title}</h1>
            <h1 className="header__subtittle">{props.subtitle}</h1>
            </div>
        </div>
    );

}
Header.defaultProps ={
    "title": 'Indecision App',
    "subtitle": "Put your info into to this app "
}

export default Header;