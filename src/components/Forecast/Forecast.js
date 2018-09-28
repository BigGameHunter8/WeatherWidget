import React from 'react';
import styles from './Forecast.scss';

let celc = (far)=>{
    return Math.floor((far-32)*5/9);
}

const Forecast = (props) => {
  return (
      <div className={ styles.atmoDiv }>
          <h1>{props.date}</h1>
          <span>Minimal temperature is {celc(props.low)}℃ and maximum is {celc(props.high)}℃</span>
          <div className={ styles.atmoDiv.bor }>Today will be {props.text}</div>
      </div>
  );
};

export default Forecast;
