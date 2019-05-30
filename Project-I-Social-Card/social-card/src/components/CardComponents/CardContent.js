import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <a href="https://reactjs.org"><div className="card-content">
            <h2>Get started with React</h2>
            <p>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
            <a href="https://www.reactjs.org">reactjs.org</a>
        </div></a>
    );
};


export default CardContent;
