import React from 'react';
import R6_A from '../accessory_img/R6_A.png'
import R6_B from '../accessory_img/R6_B.png'
import R6_C from '../accessory_img/R6_C.png'
import './Operator.css'

function HeroBanner(props) {
  return (
    <div id='character'>
      <div id='op_row'>
        <img id='op_image' src={R6_A} alt='logo'/>
      </div>
      <div id='op_row'>
        <img id='op_image' src={R6_B} alt='logo'/>
      </div>
      <div id='op_row'>
        <img id='op_image' src={R6_C} alt='logo'/>
      </div>
    </div>
  );
}

export default HeroBanner;