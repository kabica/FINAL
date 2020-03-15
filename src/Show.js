import React from 'react';
import './GameCard.css';

function Show(props) {
  return (
    <body class='show' onClick={props.onClick}>
      <p id='overview'>game overview</p>
      <p id='desc'>{props.name}</p>
    </body>
  );
}

export default Show;