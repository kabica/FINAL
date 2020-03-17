import React from 'react';
import './GameCard.css';
import Overview from './Overview'
import { useState } from "react";

function Show(props) {
  const [mode, setMode] = useState('+')
  const test = props.drop;
  const toggleMode = function() {
    if(mode === '+') setMode('-');
    if(mode === '-') setMode('+');
  }
  return (
    <body class='show'>
      <div id='text' onClick={props.onClick}>
        <p id='overview'>game overview</p>
        <p id='desc'>{props.name}</p>
      </div>
      <div id='more' onClick={() =>{ test();  toggleMode();}}>
        {mode}
      </div>
      
    </body>
  );
}

export default Show;