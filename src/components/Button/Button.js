import React, { Component } from 'react';
import '../../style/Button.css';

class Button extends Component {
  handleClick(e) {
    e.preventDefault();
    alert('Oh yea ;)');
  }

  render(props) {
    return (
      <a href="#" className="Button" onClick={this.handleClick}> 
        { this.props.text }
      </a>
    )
  }
}

export default Button;