import React from 'react';
import './Discover.css';
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

const alex = function () {
  alert('alex');
};

function Discover() {
  return (
    <div class='container'>
      <nav>
        <div>GAMETRAX</div>
        <div>PAROGIE</div>
        <div>BROROGIE</div>
        <div>JOEROGI</div>
      </nav>
      <row1>{<GameCard logo={fort}/>}{<GameCard logo={pubg}/>}{<GameCard logo={DST2}/>}{<GameCard logo={fort}/>}</row1>
      <row2>{<GameCard logo={BL3}/>}{<GameCard logo={apex}/>}{<GameCard logo={dota}/>}{<GameCard logo={BL3}/>}</row2>
      <row3>{<GameCard logo={R6_D}/>}{<GameCard logo={OW}/>}{<GameCard logo={BF1}/>}{<GameCard logo={R6_D}/>}</row3>
      <row4>{<GameCard logo={OW}/>}{<GameCard logo={R6}/>}{<GameCard logo={R6}/>}{<GameCard logo={OW}/>}</row4>
    </div>
  );
}

export default Discover;