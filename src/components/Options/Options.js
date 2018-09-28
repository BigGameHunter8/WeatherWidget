import React, { Component } from 'react';
import styles from './Options.scss';

class Options extends Component {
  constructor(props){
    super(props);
    this.change = this.change.bind(this);
  }

change(event){
    this.props.callback(event.target.selectedIndex);
}

  render() {
    return (
        <div className={ styles.options }>
            <select onChange={ this.change }>
                {this.props.cities.map((city,index)=><option key={ index }>{ city }</option>)}
            </select>
        </div>
    );
  }
}

export default Options;
