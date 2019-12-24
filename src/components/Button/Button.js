import React from 'react';
import style from './Style';
import { Text, TouchableHighlight } from 'react-native';

const createButtonStyle = props => {
  const styles = [style.defaultButton];

  if (props.operation) {
    styles.push(style.operationButton);
  }
  if (props.tripleSpace) {
    styles.push(style.tripleButton);
  }
  if (props.doubleSpace) {
    styles.push(style.doubleButton);
  }
  return styles;
};

export default props => (
  <TouchableHighlight onPress={() => props.clickFunction(props.label)}>
    <Text style={createButtonStyle(props)}>{props.label}</Text>
  </TouchableHighlight>
);
