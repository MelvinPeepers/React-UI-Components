import React from 'react';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <CalculatorDisplay number="0" />
      <NumberButton text="clear"/>
      <ActionButton action="&#xf7;"/>
      <NumberButton text="7"/>
      <NumberButton text="8"/>
      <NumberButton text="9"/>
      <ActionButton action="&#x2715;"/>
      <NumberButton text="4"/>
      <NumberButton text="5"/>
      <NumberButton text="6"/>
      <ActionButton action="&#x2212;"/>
      <NumberButton text="1"/>
      <NumberButton text="2"/>
      <NumberButton text="3"/>
      <ActionButton action="&#x2b;"/>
      <NumberButton text="clear"/>
      <ActionButton action="&#x3d;"/>
    </div>
  );
};

export default App;
