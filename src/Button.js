import React, { Component } from 'react'
class Button extends Component{
    render(){
return(
    <button onClick={function(){
        alert('clicked')
    }}
    >
        Click me!
    </button>
)
    }
}
export default Button;