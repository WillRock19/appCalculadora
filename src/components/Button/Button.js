import React from 'react';
import style from './Style';
import { Text, TouchableHighlight } from 'react-native';

export default props => (
  <TouchableHighlight onPress={props.clickFunction}>
    <Text style={style.button}>{props.label}</Text>
  </TouchableHighlight>
);
