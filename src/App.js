import React, { Component } from 'react';
import styles from './App.scss';
import axios from 'axios';
import Location from './components/Location/Location';
import Info from './components/Info/Info';
import Atmo from './components/Atmosphere/Atmo';
import Forecast from './components/Forecast/Forecast';
import Options from './components/Options/Options';
  
class App extends Component {

  constructor(props){
    super(props);
    //this.url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
    this.state = {
        items:null,
        cities: [ "Chisinau", "Kiev", "Moscow" ],
        selectedIndex: 0
    }

    this.callback = this.callback.bind(this);
}

callback(index){
    console.log(index);

    axios.get(`https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22 ${ this.state.cities[ index ] } %22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`)
    .then(res=>{
        this.state.items = res.data;
        this.forceUpdate();
    })  
}

componentDidMount(){
    axios.get(`https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22 ${ this.state.cities[ this.state.selectedIndex ] } %22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`)
    .then(res=>{
        this.setState({ items:res.data })
    })
}

  render() {
    return (
        <div className={ styles.app }>
            <Options cities={ this.state.cities } callback={ this.callback }/>
            <Location city={ this.state.items ? this.state.items.query.results.channel.location.city : 'loading' } country={ this.state.items ? this.state.items.query.results.channel.location.country : 'loading' }/>
            <Info sunrise={ this.state.items ? this.state.items.query.results.channel.astronomy.sunrise : 'loading' } sunset={ this.state.items ? this.state.items.query.results.channel.astronomy.sunset: 'loading' }/>
            <Atmo humidity={ this.state.items ? this.state.items.query.results.channel.atmosphere.humidity : 'loading' } pressure={ this.state.items ? this.state.items.query.results.channel.atmosphere.pressure : 'loading' }/>
            <Forecast date={ this.state.items ? this.state.items.query.results.channel.item.forecast[ 0 ].date : 'loading' } low={ this.state.items ? this.state.items.query.results.channel.item.forecast[ 0 ].low : 'loading' } high={ this.state.items ? this.state.items.query.results.channel.item.forecast[ 0 ].high : 'loading' } text={ this.state.items ? this.state.items.query.results.channel.item.forecast[ 0 ].text : 'loading' }/>
        </div>
    );
  }
}

export default App;
