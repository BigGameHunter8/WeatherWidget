import React from 'react';
import  styles from './Location.scss';
const Location =(props) => {
  return(
      <div className={ styles.location }>
          <h3>{props.city} / {props.country}</h3>
      </div>
  );
};

export default Location;
