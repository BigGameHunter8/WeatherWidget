import React, { Component } from 'react';
import './Location.css';

class Location extends Component {
  

  render() {
    return (
      <div className="Location">
        <h3>{this.props.city} {this.props.country}</h3>
      </div>
    );
  }
}

export default Location;
