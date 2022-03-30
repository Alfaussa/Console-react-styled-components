import React, { Component } from 'react';

import Menu from './Menu';

export default class Ccomponent extends Component {
constructor(props) {
  super(props)

  this.state = {
    visibility: false
  };
  this.handleClick = this.handleClick.bind(this);
}
handleClick(){
  this.setState(state => ({
    visibility: !state.visibility
  }));  
}
  
  render() {
     if (this.state.visibility){
    return (
        
      <div>
          <h1>Hello, {this.state.name}</h1>
          <button onClick={this.handleClick}>Button</button>
    </div>
    );
  }else {
    return (
        
      <div>
          <button onClick={this.handleClick}>Button</button>
    </div>
    )
  }
}

}


