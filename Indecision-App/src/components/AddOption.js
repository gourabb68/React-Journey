import React from 'react'
 class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.state ={
            error : undefined
        }
    }
    handleAddOptions(e){
        e.preventDefault();
        let options = e.target.elements.option.value.trim();
       
        const error = this.props.handleAddOption(options)
        e.target.elements.option.value = '';
        this.setState(()=>({error}))
        
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit ={this.handleAddOptions}>
                    <input type='text' name='option'></input>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}
export default AddOption;
// exports { AddOption}