
import React from 'react';
import Option from './Option'
const  Options=(props)=> {
    
    
    return (
        <div>
            <div className="widget-header">
            <h3 className="widget-header--title">Your option</h3>
            <button 
            className="button button--link"
            onClick={props.handleDeleteOptions}>Remove All</button>
             </div>
            {props.option.length===0 && <p className="widget__message">add an option to get started</p>}
            
            {/* <ol> */}
                {props.option.map((num,ind) =>  <Option key={num} count={ind+1} opt={num} handleDeleteOption={props.handleDeleteOption}  />)}
            {/* </ol> */}
           
        </div>
    );

}
export default Options;