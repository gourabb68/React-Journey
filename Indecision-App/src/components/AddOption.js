import React from 'react'
 class AddOption extends React.Component {
     state = {
        error : undefined
     }
    
    handleAddOptions= (e)=>{
        e.preventDefault();
        let options = e.target.elements.option.value.trim();
       
        const error = this.props.handleAddOption(options)
        e.target.elements.option.value = '';
        this.setState(()=>({error}))
        
    }
    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form  className="add-option" onSubmit ={this.handleAddOptions}>
                    <input className="add-option-input" type='text' name='option'></input>
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
}
export default AddOption;
// exports { AddOption}