import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

// You can import from local files
export default class WeatherApp extends React.Component {
  constructor() {
    super();
    this.state = {
      weather: '',
    };
  }
  getweather = async () => {
    var response = await fetch(
      'https://fcc-weather-api.glitch.me/api/current?lat=40&lon=100'   
    )
    var responseJ = await response.json(); 
    console.log(responseJ);
    this.setState({
      weather: responseJ, 
    });                                                                
  };
  componentDidMount = () => {
    this.getweather(); 
  };
  render() {
    if (this.state.weather === '') {
      return (
        <View>
          <Text>loading...</Text>
        </View>
      );
    } else {
      return (
        <View style={{ alignSelf: 'center', flex: 1 }}>
          <Image
            source={require('./download.jpg')}
            style={{ width: 240, height: 230 }}></Image>
          <Text>
            country:
            {this.state.weather.sys.country}
          </Text>
          <Text>temp:{this.state.weather.main.temp + '*C'}</Text>
          <Text>description: {this.state.weather.weather[0].description}</Text>
        </View>
      );
    }
  }
}
