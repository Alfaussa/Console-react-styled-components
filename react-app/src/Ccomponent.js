import React, { Component } from 'react'

import Menu from './Menu'

export default class Ccomponent extends Component {
  render() {
    return (
        
      <div>
          <h1>Hello, {this.props.name}</h1>
          <Menu />
          Ccomponent</div>
    )
  }
}
Ccomponent.defaultProps = {name: "Lola"};