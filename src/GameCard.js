import React from 'react';
import './GameCard.css';

function GameCard(props) {
  return (
    <div class='title_card' onClick={props.onClick}>
      <img id='ow'src={props.logo} alt="logo" />
    </div>
  );
}

export default GameCard;