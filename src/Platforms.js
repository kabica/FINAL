import React from 'react';
import SWITCH from './img/switch.png'
import './Platform.css'
const axios = require('axios');

const func = function() {
  axios.get('http://localhost:8000/')
  .then(response => console.log(response.data))
  .catch(error => console.log(error))
}
const test = function(game) {
  alert(game);
}

function Platforms(props) {
  return (
    <div id='group'>
      <div id='icons'>
        <img id='platform'src={SWITCH} alt="logo"/>
        <img id='platform'src={SWITCH} alt="logo"/>
        <img id='platform'src={SWITCH} alt="logo"/>
        <img id='platform'src={SWITCH} alt="logo"/>
      </div>
      <div id='userAdd' onClick={() => test(props.game)}>
        <div>Add</div>
        <div>+</div>
      </div>
    </div>
  );
}

export default Platforms;