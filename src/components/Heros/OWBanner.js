import React from 'react';
import OW_A from '../accessory_img/OW_A.png'
import OW_B from '../accessory_img/OW_B.png'
import OW_C from '../accessory_img/OW_C.png'
import OW_D from '../accessory_img/OW_D.png'
import './Hero.css'

function HeroBanner(props) {
  return (
    <div id='character'>
      <div id='hero_row'>
        <img id='hero_image' src={OW_A} alt='logo'/>
      </div>
      <div id='hero_row'>
        <img id='hero_image' src={OW_B} alt='logo'/>
      </div>
      <div id='hero_row'>
        <img id='hero_image' src={OW_C} alt='logo'/>
      </div>
      <div id='hero_row'>
        <img id='hero_image' src={OW_D} alt='logo'/>
      </div>
    </div>
  );
}

export default HeroBanner;