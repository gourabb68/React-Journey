

const app = {
    title: "Indecision App",
    subtitle: " put your info",
    options: []

}

class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options : props.options

        }
    }
    componentWillMount(){
        try{
        const json = localStorage.getItem('option');
        // console.log(json);
        const option= JSON.parse(json);
        if(option){
            this.setState(()=>({options: option}))
        }
        }
        catch(e){
            console.log(e)
        }
        
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.options.length !==this.state.options.length){
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('option',json);
        }
    }
    handleClick() {
        const opt = this.state.options[Math.floor(Math.random()*this.state.options.length)]
       alert(opt);
   }
    handleDeleteOptions (){
      
        //with out return key word wraping object
        this.setState(()=>({options:[]}));
    }
    handleDeleteOption (option){
      
        
      this.setState((prev)=>{
          
      return {
          options : prev.options.filter((opt)=> opt !== option)
        }

    });
    }
    handleAddOption(opt){
        ///chk string
        if(!opt){
            return 'enter a valid info';
        }
        else if(this.state.options.indexOf(opt)!==-1){
            return 'already exist'
        }
        // this.setState((prev)=>{
        //     return{
        //         options : prev.options.concat([opt])
        //     };
        // })
    this.setState((prev)=>({options: prev.options.concat([opt])}))

    }
    render() {
        return (
            <div>
                <Header  subtitle={app.subtitle} />
                <Action hasOptions = {this.state.options.length>0}handleClick={this.handleClick} />
                <Options option={this.state.options} handleDeleteOptions={this.handleDeleteOptions} 
                 handleDeleteOption={this.handleDeleteOption} 
                />
                <AddOption handleAddOption = {this.handleAddOption}/>
            </div>
        );
    }
}
IndecisionApp.defaultProps ={
    options: []
}
const Header =(props)=>{
  
        return (
            <div>
                <h1>{props.title}</h1>
                <h1>{props.subtitle}</h1>
            </div>
        );
   
}
Header.defaultProps ={
    "title": 'Indecision App '
}
const Action =(props)=> {
 
    
    
        return (
            <div>
                <button disabled= {!props.hasOptions} onClick={props.handleClick}>What do I do?</button>
            </div>
        );
    
}

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
// class AddOption extends React.Component {
//     constructor(props){
//         super(props);
//         this.handleAddOptions = this.handleAddOptions.bind(this);
//         this.state ={
//             error : undefined
//         }
//     }
//     handleAddOptions(e){
//         e.preventDefault();
//         let options = e.target.elements.option.value.trim();
       
//         const error = this.props.handleAddOption(options)
//         e.target.elements.option.value = '';
//         this.setState(()=>({error}))
        
//     }
//     render() {
//         return (
//             <div>
//                 {this.state.error && <p>{this.state.error}</p>}
//                 <form onSubmit ={this.handleAddOptions}>
//                     <input type='text' name='option'></input>
//                     <button>Add Option</button>
//                 </form>
//             </div>
//         );
//     }
// }


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));