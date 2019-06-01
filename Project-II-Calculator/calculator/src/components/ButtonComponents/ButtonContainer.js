import React from 'react';
import './Button.css';
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';

const ButtonContainer = () => {
    return (
        <div className="button-container">

            <div className="number-button">
                <NumberButton />
            </div>

            <div className="action-button">
                <ActionButton />
            </div>

        </div>

    );
};


export default ButtonContainer;