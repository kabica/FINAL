import React from 'react';
import './GameCard.css';

function GameCard(props) {
  const className = !props.sel ? 'title_card' : 'title_card--selected';
  return (
    <div class={className} onClick={props.onClick}>
      <img id='game_image1'src={props.logo} alt="logo" />
    </div>
  );
}

export default GameCard;