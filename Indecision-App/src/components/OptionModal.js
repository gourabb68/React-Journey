import React from 'react';
import Modal from 'react-modal';

const OptionModal= (props)=>{
     return(
         <Modal
         isOpen={!!props.selectedOptions} //when it will open when closed take boolean
         onRequestClose={props.handleSelectedOptionClosed} // using esc or click on outside should it close or not
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