import React from 'react';
import SWITCH from './img/switch.png'
import './Platform.css'



function Platforms(props) {
  return (
    <div id='group'>
      <div id='icons'>
        <img id='platform'src={SWITCH} alt="logo"/>
        <img id='platform'src={SWITCH} alt="logo"/>
        <img id='platform'src={SWITCH} alt="logo"/>
        <img id='platform'src={SWITCH} alt="logo"/>
      </div>
      <div id='userAdd'>
        <div>Add</div>
        <div>+</div>
      </div>
    </div>
  );
}

export default Platforms;