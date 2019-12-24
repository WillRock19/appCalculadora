import { StyleSheet, Dimensions } from 'react-native';

const style = StyleSheet.create({
  defaultButton: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888',
  },
  operationButton: {
    backgroundColor: '#fa751b',
    color: 'white',
  },
  doubleButton: {
    width: (Dimensions.get('window').width / 4) * 2,
  },
  tripleButton: {
    width: (Dimensions.get('window').width / 4) * 3,
  },
});

export default style;
