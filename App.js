import React, { Component } from 'react';
import Button from './src/components/Button';
import { View, StyleSheet } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.buttons}>
            <Button label="AC" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
