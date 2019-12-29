import 'react-native';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount } from 'enzyme';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

let calculator;

describe('Calculator App', () => {
  beforeEach(() => {
    calculator = mount(<App />);
  });

  describe('on initialization', () => {
    it('should show 0 value in the display', () => {
      console.log(calculator.find('Text[testId="display-value"]'));
    });
  });
});
