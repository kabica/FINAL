import React from 'react';
import './GameCard.css';

function GameCard(props) {
  return (
    <body class='title_card' onClick={props.onClick}>
      <img id='ow'src={props.logo} alt="logo" />
    </body>
  );
}

export default GameCard;