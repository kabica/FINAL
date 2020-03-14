import React from 'react';
import './Discover.css';
import GameCard from './GameCard';
import OW from './ow.jpg';
import R6 from './r6.jpg'
import dota from './dota.jpg'

const alex = function () {
  alert('alex');
};

function Discover() {
  return (
    <div class='container'>
    <main >
      <div class='row'>{<GameCard logo={OW}/>}{<GameCard logo={R6}/>}{<GameCard logo={OW} />}</div>
      <div class='row'>{<GameCard logo={R6}/>}{<GameCard logo={dota}/>}{<GameCard logo={R6}/>}</div>
      <div class='row'>{<GameCard logo={OW}/>}{<GameCard logo={R6}/>}{<GameCard logo={OW}/>}</div>
      <div class='row'>{<GameCard logo={R6}/>}{<GameCard logo={dota}/>}{<GameCard logo={R6}/>}</div>
      <div class='row'>{<GameCard logo={OW}/>}{<GameCard logo={R6}/>}{<GameCard logo={OW}/>}</div>
      <div class='row'>{<GameCard logo={R6}/>}{<GameCard logo={dota}/>}{<GameCard logo={R6}/>}</div>
      <div class='row'>{<GameCard logo={OW}/>}{<GameCard logo={R6}/>}{<GameCard logo={OW}/>}</div>
    </main>
    </div>
  );
}

export default Discover;