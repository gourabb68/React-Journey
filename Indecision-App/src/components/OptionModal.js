import React from 'react';
import Modal from 'react-modal';

const OptionModal= (props)=>{
     return(
         <Modal
         isOpen={!!props.selectedOptions}
         onRequestClose={props.handleSelectedOptionClosed}
         contentLabel="Selected Option Modal"
            >
             <div>
                 <h1>{props.selectedOptions}</h1>
                 <button onClick={props.handleSelectedOptionClosed}>Okay!</button>
             </div>
         </Modal>
     );
}

export default OptionModal;