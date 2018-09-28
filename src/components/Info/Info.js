import React from 'react';
import styles from './Info.scss';

 const Info = (props)=>{
   return (
       <div className={ styles.info }>
           <div className={ styles.astro }>
               <span>Sunrise: {props.sunrise} </span>
               <span>Sunset: {props.sunset} </span>
           </div>
       </div>
   );
 };

export default Info;
