import React from 'react';
import Styles from './Style';
import { View, Text } from 'react-native';

export default props => (
  <View style={Styles.display}>
    <Text style={Styles.displayValue} numberOfLines={1} ellipsizeMode={'head'}>
      {props.value}
    </Text>
  </View>
);
//https://jlongster.com/A-Prettier-Formatter
