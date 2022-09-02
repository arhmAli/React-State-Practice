import React, { Component } from 'react';

class BrokenButton extends Component{
  constructor(props){
    super(props);
    this.state={clicked:false}
    this.handleClick=this.handleClick.bind(this);
  }
  handleClick(e){
    this.setState({clicked:true});
  }
    render(){
        return(
            <div>
                <h1>{this.state.clicked ? 'clicked!' :'not clicked!'}</h1>
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        )
    }
}
export default BrokenButton;