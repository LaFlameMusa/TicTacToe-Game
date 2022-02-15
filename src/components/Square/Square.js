import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';


function Square(props)  {
    return(
        <button className="square" onClick={props.onClick}>
                {props.value}
        </button>
    );
}

export default Square;