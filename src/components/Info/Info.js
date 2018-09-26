import React, { Component } from 'react';
import './Info.css';


class Info extends Component {
    

  render() {
    
    return (
      <div className="Info">
        <div className="astro">
            <span>Sunrise: {this.props.sunrise} </span>
            <span>Sunset: {this.props.sunset} </span>
        </div>
      </div>
    );
  }
}

export default Info;
