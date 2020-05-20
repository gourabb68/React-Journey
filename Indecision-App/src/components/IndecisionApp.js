
import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';
class IndecisionApp extends React.Component {
    state = {
        options : [],
        selectedOptions: undefined
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
    componentDidUpdate (prevProps,prevState){
        if(prevState.options.length !==this.state.options.length){
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('option',json);
        }
    }
    handleSelectedOptionClosed =()=>{
        this.setState(()=>({selectedOptions:undefined}))
    }
    handleClick=()=> {
        const opt = this.state.options[Math.floor(Math.random()*this.state.options.length)]
      this.setState(()=>({selectedOptions:opt}))
   }
    handleDeleteOptions =()=>{
      
        //with out return key word wraping object
        this.setState(()=>({options:[]}));
    }
    handleDeleteOption =(option)=>{
      
        
      this.setState((prev)=>{
          
      return {
          options : prev.options.filter((opt)=> opt !== option)
        }

    });
    }
    handleAddOption= (opt)=>{
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
        
                <OptionModal selectedOptions={this.state.selectedOptions} handleSelectedOptionClosed={this.handleSelectedOptionClosed}/>
            </div>
        );
    }
}
IndecisionApp.defaultProps ={
    options: []
}

export default IndecisionApp;