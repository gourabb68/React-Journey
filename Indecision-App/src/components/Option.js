import React from 'react';
const  Option =(props)=> {
    
    return (
        <div>
            {props.opt}
            
            <button onClick={
                (e)=>{
                    props.handleDeleteOption(props.opt)
                }
              

            }>remove</button>


        </div>
    );

}
export default Option;