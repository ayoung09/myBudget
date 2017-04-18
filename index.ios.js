import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Router, Scene, ActionConst } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import Button from 'react-native-button';
import store from './src/store';

import WelcomePage from './src/components/WelcomePage';

export default class myBudget extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="welcomePage" component={WelcomePage} initial={true} />
        </Router>
      </Provider>
    );
  }
}


AppRegistry.registerComponent('myBudget', () => myBudget);
