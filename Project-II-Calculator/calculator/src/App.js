import React from 'react';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <CalculatorDisplay number="0" />
      <NumberButton text="clear" buttonStyle="num-btn btn lg-btn clear-btn"/>
      <ActionButton action="&#xf7;" buttonStyle="action-btn btn sm-btn" />
      <NumberButton text="7" buttonStyle="num-btn btn sm-btn" />
      <NumberButton text="8" buttonStyle="num-btn btn sm-btn" />
      <NumberButton text="9" buttonStyle="num-btn btn sm-btn" />
      <ActionButton action="&#xd7;" buttonStyle="action-btn btn sm-btn" />
      <NumberButton text="4" buttonStyle="num-btn btn sm-btn" />
      <NumberButton text="5" buttonStyle="num-btn btn sm-btn" />
      <NumberButton text="6" buttonStyle="num-btn btn sm-btn" />
      <ActionButton action="&#x2212;" buttonStyle="action-btn btn sm-btn" />
      <NumberButton text="1" buttonStyle="num-btn btn sm-btn" />
      <NumberButton text="2" buttonStyle="num-btn btn sm-btn" />
      <NumberButton text="3" buttonStyle="num-btn btn sm-btn" />
      <ActionButton action="&#x2b;" buttonStyle="action-btn btn sm-btn" />
      <NumberButton text="0" buttonStyle="num-btn btn lg-btn sm-btn" />
      <ActionButton action="&#x3d;" buttonStyle="action-btn btn sm-btn" />
    </div>
  );
};

export default App;
