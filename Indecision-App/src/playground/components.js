
const app = {
    title: "Indecision App",
    subtitle: " put your info",
    options: []

}

class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options : []

        }
    }
    handleClick() {
        const opt = this.state.options[Math.floor(Math.random()*this.state.options.length)]
       alert(opt);
   }
    handleDeleteOptions (){
        this.setState(()=>{
            return {
                options : []
            }
        })
    }
    handleAddOption(opt){
        ///chk string
        if(!opt){
            return 'enter a valid info';
        }
        else if(this.state.options.indexOf(opt)!==-1){
            return 'already exist'
        }
        this.setState((prev)=>{
            return{
                options : prev.options.concat([opt])
            };
        })


    }
    render() {
        return (
            <div>
                <Header title={app.title} subtitle={app.subtitle} />
                <Action hasOptions = {this.state.options.length>0}handleClick={this.handleClick} />
                <Options option={this.state.options} handleDeleteOptions={this.handleDeleteOptions} />
                <AddOption handleAddOption = {this.handleAddOption}/>
            </div>
        );
    }
}
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h1>{this.props.subtitle}</h1>
            </div>
        );
    }
}
class Action extends React.Component {
 
    
    render() {
        return (
            <div>
                <button disabled= {!this.props.hasOptions} onClick={this.props.handleClick}>What do I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    
    render() {
        return (
            <div>
                
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                <p>Here is the options</p>
                <ol>
                    {this.props.option.map((num) => <Option key={num} opt={num} />)}
                </ol>
                
            </div>
        );
    }
}
class Option extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.opt}</p>


            </div>
        );
    }
}
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
        this.setState(()=>{

            return {
               error: error
            };

        })
        
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


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));