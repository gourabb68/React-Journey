class VisToggle extends React.Component{
 constructor(props){
     super(props);
     this.handleClick = this.handleClick.bind(this);
     this.state={
         st: false

     }
 }
 handleClick(){
   this.setState((prevState)=>{
       return {
           st: prevState.st ===true? false:true
       };
       
   })
  
 }


    render(){
        return (
          <div>
              <h1>Visibility Toggle</h1>
        <button onClick={this.handleClick}>{this.state.st===true?'hide':'show'}</button>
        
        {this.state.st && <p>Here is details</p>}
          </div>
        );
    }
}
ReactDOM.render(<VisToggle />,document.getElementById('app'));