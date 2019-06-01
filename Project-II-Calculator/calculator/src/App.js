import React from 'react';
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import './App.css';

const App = props => {
  return (
    <div className="container">
      <CalculatorDisplay />
    </div>
  );
};

export default App;
