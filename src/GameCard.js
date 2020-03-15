import React from 'react';
import './GameCard.css';

function GameCard(props) {
  return (
    <body class='title_card' onClick={() => alert(props.logo)}>
      <img id='ow'src={props.logo} alt="logo" />
    </body>
  );
}

export default GameCard;