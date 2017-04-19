import React, { Component } from 'react';
import { Stylesheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Button from 'react-native-button';

const mapStateToProps = state => ({
  myBudgets: state.budget.myBudgets,
});

class BudgetList extends Component {
  render({myBudgets}) {
    return (
      <View>
      <Text>My Budgets</Text>
        {myBudgets.map(budgetName => (
          <Button style={styles.button}>{budgetName}</Button>
          )
        )}
      </View>
    );
  }
}

export default connect(mapStateToProps)(BudgetList);
