import React, { Component } from 'react';
import styles from './Forecast.css';


const Forecast = (props) => {
  return (
    <div className={styles.atmoDiv}>
        <h1>{props.date}</h1>
        <span>Minimal temperature is {props.low}℃ and maximum is {props.high}℃</span>
        <div className={styles.atmoDiv.bor}>Today will be {props.text}</div>
      </div>
  );
};

export default Forecast;
