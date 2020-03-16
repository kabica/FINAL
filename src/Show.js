import React from 'react';
import './GameCard.css';

function Show(props) {
  return (
    <body class='show' onClick={props.onClick}>
      <div id='text'>
        <p id='overview'>game overview</p>
        <p id='desc'>{props.name}</p>
      </div>
      <div id='more'>
        +
      </div>
    </body>
  );
}

export default Show;