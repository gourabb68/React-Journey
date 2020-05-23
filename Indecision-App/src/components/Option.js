import React from 'react';
const  Option =(props)=> {
    
    return (
        <div className="option">
            <p className="option__text">{props.count + '. '+props.opt}</p>
            
            <button
            className="button button--link"
            onClick={
                (e)=>{
                    props.handleDeleteOption(props.opt)
                }
              

            }>remove</button>


        </div>
    );

}
export default Option;