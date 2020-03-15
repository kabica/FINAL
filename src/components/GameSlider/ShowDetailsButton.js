import React from 'react';
import IconArrowDown from '../public/images/down-arrow.png'
import './ShowDetailsButton.scss'

const ShowDetailsButton = ({ onClick }) => (
  <button onClick={onClick} className="show-details-button">
    <span>
    <img className="arrow" src={IconArrowDown} alt="arrow"/>
    </span>
  </button>
);

export default ShowDetailsButton;
