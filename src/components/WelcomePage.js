import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Button from 'react-native-button';
import { setUser } from '../reducers/user';

const mapStateToProps = state => ({
  userId: state.user.userId,
});

const mapDispatchToProps = dispatch => ({
  setUser: (userId) => dispatch(setUser(userId)),
});

class WelcomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to myBudget!
        </Text>
        <Text style={styles.instructions}>
          To get started, log in or sign up below:
        </Text>
        <Button style={styles.button}>Sign up</Button>
        <Button style={styles.button}>Log in</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    width: 100,
    height: 'auto',
    margin: 10,
    padding: 10,
    backgroundColor: '#ADD8E6',
    color: 'white',
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);
