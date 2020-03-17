import React from 'react';
import './Discover3.css';
import GameCard from './GameCard';
import OW from './img/ow.jpg';
import R6 from './img/r6.jpg'
import dota from './img/dota.jpg'
import apex from './img/apex.jpeg';
import fort from './img/fort.jpg'
import pubg from './img/pubg.png'
import BL3 from './img/BL3.png'
import BF1 from './img/BF1.png'
import R6_D from './img/r6dark.jpg'
import DST2 from './img/destiny2.png'
import Show from './Show'
import { useState } from "react";
import Overview from './Overview'

const text = {
  FORT: 'A COOL GAME FOR COOL PEOPLE BUT PEOPLE WITH SMALL PEROGIES',
  PUBG: 'a game where people run around and suddenly get slammed by a dude in a jeep and then all the fun you were once having is over dasdasd dasdas',
  DEST_2: 'Paula is a cool mom!',
  BL3: 'borderlands3',
  APEX: 'Apex legends',
  DOTA: 'dota',
  R6: 'rainbow six',
  OW: 'overwatch',
  BF1: 'battlefield1'
}

function Discover() {
  const initial = {
    row1: 'hide_R1',
    row2: 'hide_R2',
    row3: 'hide_R3',
    row4: 'hide_R4',
    desc1: 'hide',
    desc2: 'hide',
    desc3: 'hide',
    desc4: 'hide'
  }
  const [mode, setMode] = useState(initial);
  const setVisual = function(row, ID) {
    if(row === 'row1') setMode(mode => ({...mode, row1: ID}));
    if(row === 'row2') setMode(mode => ({...mode, row2: ID}));
    if(row === 'row3') setMode(mode => ({...mode, row3: ID}));
    if(row === 'row4') setMode(mode => ({...mode, row4: ID}));
  };
  const hideVisual = function(row) {
    if(row === 'row1') setMode(mode => ({...mode, row1: 'hide_R1', desc1: 'hide'}));
    if(row === 'row2') setMode(mode => ({...mode, row2: 'hide_R2', desc2: 'hide'}));
    if(row === 'row3') setMode(mode => ({...mode, row3: 'hide_R3', desc3: 'hide'}));
    if(row === 'row4') setMode(mode => ({...mode, row4: 'hide_R4', desc4: 'hide'}));
  }
  const hideView = function(key) {
    if(key === 'desc1') (mode[key] === 'hide') ? setMode(mode => ({...mode, desc1: 'show'})) : setMode(mode => ({...mode, desc1: 'hide'}));
    if(key === 'desc2') (mode[key] === 'hide') ? setMode(mode => ({...mode, desc2: 'show'})) : setMode(mode => ({...mode, desc2: 'hide'}));
    if(key === 'desc3') (mode[key] === 'hide') ? setMode(mode => ({...mode, desc3: 'show'})) : setMode(mode => ({...mode, desc3: 'hide'}));
    if(key === 'desc4') (mode[key] === 'hide') ? setMode(mode => ({...mode, desc4: 'show'})) : setMode(mode => ({...mode, desc4: 'hide'}));
  };

  return (
    <main class='container'>
      <nav>
        <div>GAMETRAX</div>
        <div>PAROGIE</div>
        <div>BROROGIE</div>
        <div>JOEROGI</div>
      </nav>
      <body>
        <div id='row1'>
          {<GameCard logo={fort} onClick={() => setVisual('row1','FORT')}/>}
          {<GameCard logo={pubg} onClick={() => setVisual('row1','PUBG')}/>}
          {<GameCard logo={DST2} onClick={() => setVisual('row1','DEST_2')}/>}
          {<GameCard logo={fort} onClick={() => setVisual('row1','FORT')}/>}
        </div>
        {mode['row1'] !== 'hide_R1' && (<Show name={text[mode['row1']]} onClick={() => hideVisual('row1')} drop={() => hideView('desc1')}/>)}
        {mode['desc1'] === 'show' && (<Overview game={mode['row1']} />)}

        <div id='row2'>
          {<GameCard logo={BL3} onClick={() => setVisual('row2','BL3')}/>}
          {<GameCard logo={apex} onClick={() => setVisual('row2','APEX')}/>}
          {<GameCard logo={dota} onClick={() => setVisual('row2','DOTA')}/>}
          {<GameCard logo={BL3} onClick={() => setVisual('row2','BL3')}/>}
        </div>
        {mode['row2'] !== 'hide_R2' && (<Show name={text[mode['row2']]} onClick={() => hideVisual('row2')} drop={() => hideView('desc2')}/>)}
        {mode['desc2'] === 'show' && (<Overview game={mode['row2']} />)}

        <div id='row3'>
          {<GameCard logo={R6_D} onClick={() => setVisual('row3','R6')}/>}
          {<GameCard logo={OW} onClick={() => setVisual('row3','OW')}/>}
          {<GameCard logo={BF1} onClick={() => setVisual('row3','BF1')}/>}
          {<GameCard logo={R6_D} onClick={() => setVisual('row3','R6')}/>}
        </div>
        {mode['row3'] !== 'hide_R3' && (<Show name={text[mode['row3']]} onClick={() => hideVisual('row3')} drop={() => hideView('desc3')}/>)}
        {mode['desc3'] === 'show' && (<Overview game={mode['row3']} />)}

        <div id='row4'>
          {<GameCard logo={OW} onClick={() => setVisual('row4','OW')}/>}
          {<GameCard logo={R6} onClick={() => setVisual('row4','R6')}/>}
          {<GameCard logo={R6} onClick={() => setVisual('row4','R6')}/>}
          {<GameCard logo={OW} onClick={() => setVisual('row4','OW')}/>}
        </div>
        {mode['row4'] !== 'hide_R4' && (<Show name={text[mode['row4']]} onClick={() => hideVisual('row4')} drop={() => hideView('desc4')}/>)}
        {mode['desc4'] === 'show' && (<Overview game={mode['row4']} />)}
      </body>
    </main>
  );
}

export default Discover;



