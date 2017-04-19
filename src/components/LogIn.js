import React, { Component } from 'react';
import { Stylesheet, Text, View} from 'react-native';
import { connect } from 'react-redux';
import Button from 'react-native-button';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: {value: ''},
      password: {value: ''},
    };
  }

  render() {
    return (
      <View></View>
    );
  }
}

export default LogIn;
