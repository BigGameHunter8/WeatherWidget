import React, { Component } from 'react';
import styles from './Info.css';

 const Info = (props)=>{
   return (
    <div className={styles.info}>
    <div className={styles.astro}>
        <span>Sunrise: {props.sunrise} </span>
        <span>Sunset: {props.sunset} </span>
    </div>
  </div>
   );
 };

export default Info;
