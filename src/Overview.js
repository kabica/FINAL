import React from 'react';
import './Overview.css';
import OW_WIDE from './img/ow_wide.png'
import R6B from './img/R6B.png'
import R6_INV from './img/R6_INV.png'
import PatchNote from './PatchNote'
import R6 from './img/R6B.png'
import DEST_2 from './img/DEST_2.png'
import PUBG from './img/PUBG_banner.png'
import APEX_W from './img/APEX_W.png'
import FORT_W from './img/FORT_W2.png'
import ROCKET_W from './img/ROCKET_W.png'
import DOTA_W from './img/DOTA_W.png'
import BF1_W from './img/BF1_W.png'
import OW_W from './img/ow_wide.png'
import LoL_W from './img/LoL_W.png'
import BL3_W from './img/BL3_W.png'
import COD_W from './img/COD_W.png'
import FALLOUT from './img/FALLOUT_W.png'
import MINE_W from './img/MINE_W.png'
import { useState } from "react";
import notes  from './notes'
import Platforms from './Platforms'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const axios = require('axios');




const attack = 'ATTACKER DRONE SPAWN';
const note = <p>One of the more impactful changes to note this season is how we approached the behavior of barricade debris. Previously, when partially breaking barricades, there would be a piece of debris that could get stuck in the remainder of the barricade and since this is done client-side, it could put a player at a significant advantage toward their opponent, due to a line of sight being blocked for one player but not for the other.</p>


const images = {
  PUBG: PUBG,
  FORT: FORT_W,
  R6: R6,
  DEST_2: DEST_2,
  APEX: APEX_W,
  ROCKET: ROCKET_W,
  DOTA: DOTA_W,
  BF1: BF1_W,
  OW: OW_W,
  LoL: LoL_W,
  BL3: BL3_W,
  COD: COD_W,
  FALL: FALLOUT,
  MINE: MINE_W
}
const func = function() {
  axios.get('http://localhost:8000/')
  .then(response => console.log(response.data))
  .catch(error => console.log(error))
}

const postMessage = function(text) {
  axios.post('http://localhost:8000/alex', {
    author: 'alex',
    user: 1,
    text: text
  })
  .then(alert('done'))
  .catch(err => console.log(err))
}

const post = function() {
  
}


function Overview(props) {
  const [mode, setMode] = useState('');
  
  return (
    <div id='game'>
      <div id='banner'>
        <img id='wide'src={images[props.game]} alt="logo" onClick={func}/>
        {<Platforms game={props.game}/>}
      </div>
      <div id='notes' >
        <div id='section'>OVERVIEW: {props.game}</div>
          {<PatchNote text={note}/>}
        <div id='section'>PATCH NOTES: {props.game}</div>
          {<PatchNote title={'BARRICADE DEBRIS CONSISTENCY'} text={note}/>}
          {<PatchNote title={attack} text={notes.FORT.PATCH}/>}
      </div>
      <div id='scroll'>
        <div id='chatInput'>
            <form noValidate autoComplete="off">
              <TextField value={mode} id="outlined-secondary"label="Outlined secondary"variant="outlined"color="primary"onChange={(event) => setMode(event.target.value)}/>
            </form>
            <Button id='button'variant="outlined" color="primary" onClick={() => postMessage(mode)}>
              Primary
            </Button>
        </div>
      </div>
    </div>
  );
}

export default Overview;