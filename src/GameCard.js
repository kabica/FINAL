import React from 'react';
import './GameCard.css';

function GameCard(props) {
  return (
    <body class='title_card' onClick={() => alert(props.logo)}>
      <img class='ow'src={props.logo} className="App-logo" alt="logo" />
    </body>
  );
}

export default GameCard;