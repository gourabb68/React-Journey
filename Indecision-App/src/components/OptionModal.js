import React from 'react';
import Modal from 'react-modal';

const OptionModal= (props)=>{
     return(
         <Modal
         isOpen={!!props.selectedOptions} //when it will open when closed take boolean
         onRequestClose={props.handleSelectedOptionClosed} // using esc or click on outside should it close or not
         closeTimeoutMS= {100}
         contentLabel="Selected Option Modal"
         className="modal"
            >
             <div>
                 <h3 className="modal_title">Selected Opion</h3>
                 {props.selectedOptions && <p className="modal__body">{props.selectedOptions}</p>}
                 <button  className="button" onClick={props.handleSelectedOptionClosed}>Okay!</button>
             </div>
         </Modal>
     );
}

export default OptionModal;