import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {
    return (
        <div className="calculator-display">
            <p>{props.number}</p>
        </div>
    );
};

export default CalculatorDisplay;