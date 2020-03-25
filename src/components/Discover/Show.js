import React from 'react';
import '../GameCards/GameCard.css';
import Overview from '../Overview/Overview'
import { useState } from "react";
import Fade from '@material-ui/core/Fade';

function Show(props) {
  const [mode, setMode] = useState('+')
  const hideView = props.drop;
  const toggleMode = function() {
    if(mode === '+') setMode('-');
    if(mode === '-') setMode('+');
  }

  return (
    <body class='show'>
      <div id='text' onClick={props.onClick}>
        <p id='overview'>GAME OVERVIEW</p>
        <p id='desc'>{props.name}</p>
      </div>
      <div id='more' onClick={() =>{ hideView();  toggleMode();}}>
        {mode}
      </div>
      {mode['desc1'] === 'show' && (<Overview game={mode['row1']} />)}
    </body>
  );
}

export default Show;