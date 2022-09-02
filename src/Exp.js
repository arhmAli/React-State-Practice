import React, { Component, PureComponent } from 'react'

class Exp extends  Component{
    constructor(props){
        super(props);
        this.state={clicked:false}
        this.state={num:1};
        // this.state.maxNum=10;
        this.handleClick=this.handleClick.bind(this);
      }
handleClick(e){
        this.setState({clicked:true})    
        let rand=Math.floor(Math.random()*10)+1;
        this.setState({num:rand})
      }
render(){
    return(
<div>
    <h1> Number is {this.state.num}</h1>
    {this.state.num===7 
    ? //if true show YOU WIN
    <h2>You WIN</h2>: //Else show this
    <button onClick={this.handleClick}>Random Number</button>}
    </div>
    )
}
}
export default Exp;