import React from 'react';
import IconArrowDown from '../public/images/down-arrow.png'
import './SlideButton.scss'

const SlideButton = ({ onClick, type }) => (
  <button className={`slide-button slide-button--${type}`} onClick={onClick}>
    <span>
    <img src={IconArrowDown} alt="arrow"/>
    </span>
  </button>
);

export default SlideButton;