import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Button from 'react-native-button';

const mapStateToProps = state => ({
  username: state.user.username,
});

class UserHome extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome, {this.props.username}!
        </Text>
        <Button style={styles.button}>Budgets</Button>
        <Button style={styles.button}>Calendar</Button>
        <Button style={styles.button}>Purchases</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
  },
  button: {
    margin: 10,
    padding: 10,
  }
});

export default connect(mapStateToProps, null)(UserHome);
