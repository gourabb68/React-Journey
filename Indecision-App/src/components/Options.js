
import React from 'react';
import Option from './Option'
const  Options=(props)=> {
    
    
    return (
        <div>
            
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.option.length===0 && <p>add an option to get started</p>}
            <p>Here is the options</p>
            {/* <ol> */}
                {props.option.map((num) =>  <Option key={num} opt={num} handleDeleteOption={props.handleDeleteOption}  />)}
            {/* </ol> */}
            
        </div>
    );

}
export default Options;