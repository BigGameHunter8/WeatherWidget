import React, { Component } from 'react';
import  styles from './Location.css';

// class Location extends Component {
  

//   render() {
//     return (
//       <div className={styles.location}>
//         <h3>{this.props.city} {this.props.country}</h3>
//       </div>
//     );
//   }
// }


const Location =(props) => {
  return(
    <div className={styles.location}>
        <h3>{props.city} {props.country}</h3>
    </div>
  );
};

export default Location;
