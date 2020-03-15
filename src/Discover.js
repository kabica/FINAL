import React from 'react';
import './Discover3.css';
import GameCard from './GameCard';
import OW from './img/ow.jpg';
import R6 from './img/r6.jpg'
import dota from './img/dota.jpg'
import R6D from './img/r6dark.jpg';
import apex from './img/apex.jpeg';
import inv from './img/invitational.jpg'
import bf from './img/bf.png'
import apex_wide from './img/apex_wide.png'
import ow_wide from './img/ow_wide.png'
import fort from './img/fort.jpg'
import lol from './img/lol.jpg'
import pubg from './img/pubg.png'
import BL3 from './img/BL3.png'
import BF1 from './img/BF1.png'
import BF4 from './img/BF4.png'
import rocket from './img/rocket.png'
import R6_D from './img/r6dark.jpg'
import DST from './img/destiny.png'
import DST2 from './img/destiny2.png'
import Show from './Show'
import { useState } from "react";

const text = {
  fort: 'A COOL GAME FOR COOL PEOPLE BUT PEOPLE WITH SMALL PEROGIES',
  PUBG: 'a game where people run around and suddenly get slammed by a dude in a jeep and then all the fun you were once having is over',
  paula: 'Paula is a cool mom!'
}

function Discover() {
  const [state, setState] = useState('hide');
  const alex = function(ID) {
    setState(text[ID]);
  }
  const bica = function(ID) {
    setState('hide');
  }
  return (
    <div class='container'>
      <nav>
        <div>GAMETRAX</div>
        <div>PAROGIE</div>
        <div>BROROGIE</div>
        <div>JOEROGI</div>
      </nav>
      <main>
        <row1>
          {<GameCard logo={fort} onClick={() => alex('fort')}/>}
          {<GameCard logo={pubg} onClick={() => alex('PUBG')}/>}
          {<GameCard logo={DST2} onClick={() => alex('paula')}/>}
          {<GameCard logo={fort}/>}
        </row1>
        {state !== 'hide' && (<Show name={state} onClick={bica}/>)}
        <row2>{<GameCard logo={BL3}/>}{<GameCard logo={apex}/>}{<GameCard logo={dota}/>}{<GameCard logo={BL3}/>}</row2>
        <row3>{<GameCard logo={R6_D}/>}{<GameCard logo={OW}/>}{<GameCard logo={BF1}/>}{<GameCard logo={R6_D}/>}</row3>
        <row4>{<GameCard logo={OW}/>}{<GameCard logo={R6}/>}{<GameCard logo={R6}/>}{<GameCard logo={OW}/>}</row4>
      </main>
    </div>
  );
}

export default Discover;