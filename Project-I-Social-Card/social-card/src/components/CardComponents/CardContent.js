import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className="card-content">
            <a href="https://reactjs.org"><h2>Get started with React</h2></a>
            <a href="https://reactjs.org"><p>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p></a>
            <a className="react-link" href="https://www.reactjs.org">reactjs.org</a>
        </div>
    );
};


export default CardContent;
