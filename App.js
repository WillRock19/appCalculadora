import React, { Component } from 'react';
import Button from './src/components/Button';
import Display from './src/components/Display';
import { View, StyleSheet } from 'react-native';

const initialState = {
  displayValue: '0',
  numbersToCalculate: new Array(2),
  operation: null,
};

export default class App extends Component {
  constructor() {
    super();
    this.state = { ...initialState };
  }

  addDigit = digit => {
    this.setState({ displayValue: digit });
  };

  addOperation = operation => {
    this.setState({ operation: operation });
  };

  render() {
    return (
      <View>
        <View style={styles.container}>
          <Display value={this.state.displayValue} />
          <View style={styles.buttons}>
            <Button label="AC" tripleSpace />
            <Button label="/" clickFunction={this.addOperation} operation />
            <Button label="7" clickFunction={this.addDigit} />
            <Button label="8" clickFunction={this.addDigit} />
            <Button label="9" clickFunction={this.addDigit} />
            <Button label="*" clickFunction={this.addOperation} operation />
            <Button label="4" clickFunction={this.addDigit} />
            <Button label="5" clickFunction={this.addDigit} />
            <Button label="6" clickFunction={this.addDigit} />
            <Button label="-" clickFunction={this.addOperation} operation />
            <Button label="1" clickFunction={this.addDigit} />
            <Button label="2" clickFunction={this.addDigit} />
            <Button label="3" clickFunction={this.addDigit} />
            <Button label="+" clickFunction={this.addOperation} operation />
            <Button label="0" doubleSpace clickFunction={this.addDigit} />
            <Button label="." />
            <Button label="=" operation />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
