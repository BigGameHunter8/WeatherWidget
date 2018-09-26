import React, { Component } from 'react';
import './Atmo.css';


class Atmo extends Component {
    

  render() {

    
    return (
      <div className="Atmo">
        <span>Humidity is {this.props.humidity} / </span>
        <span>Pressure is {this.props.pressure} </span>
      </div>
    );
  }
}

export default Atmo;
