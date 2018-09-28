import React from 'react';
import styles from './Atmo.scss';

const Atmo =(props)=>{
  return (
      <div className={ styles.atmo }>
          <span>Humidity is {props.humidity} / </span>
          <span>Pressure is {props.pressure} </span>
      </div>
  )
};

export default Atmo;
