import React, { Component } from 'react';
import './Forecast.css';


class Forecast extends Component {
    

  render() {
    console.log(this.props.date);
    
    return (
      <div className="Atmo">
        <h1>{this.props.date}</h1>
        <span>Minimal temperature is {this.props.low}℃ and maximum is {this.props.high}℃</span>
        <div>Today will be {this.props.text}</div>
      </div>
    );
  }
}

export default Forecast;
