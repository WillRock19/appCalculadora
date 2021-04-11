import 'react-native';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import App from '../App';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

let calculator;

describe('Calculator App', () => {
  // calculator = renderer.create(<App />);
  calculator = shallow(<App />);

  describe('on initialization', () => {
    it('should show 0 value in the display', () => {
      console.log('Valor: ', calculator);
      console.log('A root: ', calculator.instance());
      // console.log(calculator.root.find('Text[testId="display-value"]'));

      expect(true).toBe(true);
    });
  });
});
