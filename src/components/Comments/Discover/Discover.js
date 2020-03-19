import React from 'react';
import './Discover3.css';
import Overview from '../../Overview/Overview'
import GameCard from '../../GameCards/GameCard';
import OW from '../img/ow.jpg';
import dota from '../img/dota.jpg'
import apex from '../img/apex.jpeg';
import fort from '../img/fort.jpg'
import pubg from '../img/pubg.png'
import BL3 from '../img/BL3.png'
import BF1 from '../img/BF1.png'
import R6_D from '../img/r6dark.jpg'
import DST2 from '../img/destiny2.png'
import Show from './Show'
import FORT_S from '../img/FORT_S.png'
import ROCKET from '../img/rocket.png'
import LoL from '../img/LoL.png'
import COD from '../img/COD.png'
import FALL from '../img/FALLOUT.png'
import MINE from '../img/MINE.png'
import { useState } from "react";
import { v } from './constants';
import { text } from '../../Overview/text';




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
    if(row === v.ROW1) setMode(mode => ({...mode, row1: ID}));
    if(row === v.ROW2) setMode(mode => ({...mode, row2: ID}));
    if(row === v.ROW3) setMode(mode => ({...mode, row3: ID}));
    if(row === v.ROW4) setMode(mode => ({...mode, row4: ID}));
  };
  const hideVisual = function(row) {
    if(row === v.ROW1) setMode(mode => ({...mode, row1: v.HIDE_R1, desc1: v.HIDE}));
    if(row === v.ROW2) setMode(mode => ({...mode, row2: v.HIDE_R2, desc2: v.HIDE}));
    if(row === v.ROW3) setMode(mode => ({...mode, row3: v.HIDE_R3, desc3: v.HIDE}));
    if(row === v.ROW4) setMode(mode => ({...mode, row4: v.HIDE_R4, desc4: v.HIDE}));
  }
  const hideView = function(key) {
    if(key === v.DESC1) (mode[key] === v.HIDE) ? setMode(mode => ({...mode, desc1: v.SHOW})) : setMode(mode => ({...mode, desc1: v.HIDE}));
    if(key === v.DESC2) (mode[key] === v.HIDE) ? setMode(mode => ({...mode, desc2: v.SHOW})) : setMode(mode => ({...mode, desc2: v.HIDE}));
    if(key === v.DESC3) (mode[key] === v.HIDE) ? setMode(mode => ({...mode, desc3: v.SHOW})) : setMode(mode => ({...mode, desc3: v.HIDE}));
    if(key === v.DESC4) (mode[key] === v.HIDE) ? setMode(mode => ({...mode, desc4: v.SHOW})) : setMode(mode => ({...mode, desc4: v.HIDE}));
  };

  return ( 
    <main class='container'>
      <nav>
        <div>GAMETRAX</div>
        <div>PAROGIE</div>
        <div>BROROGIE</div>
        <div>JOEROGI</div>
      </nav>
      <div id='body'>
        <div id='row1'>
          {<GameCard sel={mode[v.ROW1] === 'FORT'} logo={FORT_S} onClick={() => setVisual(v.ROW1,'FORT')}/>}
          {<GameCard sel={mode[v.ROW1] === 'PUBG'} logo={pubg} onClick={() => setVisual(v.ROW1,'PUBG')}/>}
          {<GameCard sel={mode[v.ROW1] === 'DEST_2'} logo={DST2} onClick={() => setVisual(v.ROW1,'DEST_2')}/>}
          {<GameCard sel={mode[v.ROW1] === 'FORT'} logo={fort} onClick={() => setVisual(v.ROW1,'FORT')}/>}
        </div>
        {mode[v.ROW1] !== v.HIDE_R1 && (
        <Show name={text[mode[v.ROW1]]} onClick={() => hideVisual(v.ROW1)} drop={() => hideView(v.DESC1)}/>)}
        {mode[v.DESC1] === 'show' && (<Overview game={mode[v.ROW1]} />)}

        <div id='row2'>
          {<GameCard sel={mode[v.ROW2] === 'BL3'} logo={BL3} onClick={() => setVisual(v.ROW2,'BL3')}/>}
          {<GameCard sel={mode[v.ROW2] === 'APEX'} logo={apex} onClick={() => setVisual(v.ROW2,'APEX')}/>}
          {<GameCard sel={mode[v.ROW2] === 'DOTA'} logo={dota} onClick={() => setVisual(v.ROW2,'DOTA')}/>}
          {<GameCard sel={mode[v.ROW2] === 'ROCKET'} logo={ROCKET} onClick={() => setVisual(v.ROW2,'ROCKET')}/>}
        </div>
        {mode[v.ROW2] !== v.HIDE_R2 && (
        <Show name={text[mode[v.ROW2]]} onClick={() => hideVisual(v.ROW2)} drop={() => hideView(v.DESC2)}/>)}
        {mode[v.DESC2] === 'show' && (<Overview game={mode[v.ROW2]} />)}

        <div id='row3'>
          {<GameCard sel={mode[v.ROW3] === 'R6'} logo={R6_D} onClick={() => setVisual(v.ROW3,'R6')}/>}
          {<GameCard sel={mode[v.ROW3] === 'OW'} logo={OW} onClick={() => setVisual(v.ROW3,'OW')}/>}
          {<GameCard sel={mode[v.ROW3] === 'BF1'} logo={BF1} onClick={() => setVisual(v.ROW3,'BF1')}/>}
          {<GameCard sel={mode[v.ROW3] === 'LoL'} logo={LoL} onClick={() => setVisual(v.ROW3,'LoL')}/>}
        </div>
        {mode[v.ROW3] !== v.HIDE_R3 && (
        <Show name={text[mode[v.ROW3]]} onClick={() => hideVisual(v.ROW3)} drop={() => hideView(v.DESC3)}/>)}
        {mode[v.DESC3] === 'show' && (<Overview game={mode[v.ROW3]} />)}

        <div id='row4'>
          {<GameCard sel={mode[v.ROW4] === 'OW'} logo={OW} onClick={() => setVisual(v.ROW4,'OW')}/>}
          {<GameCard sel={mode[v.ROW4] === 'COD'} logo={COD} onClick={() => setVisual(v.ROW4,'COD')}/>}
          {<GameCard sel={mode[v.ROW4] === 'FALL'} logo={FALL} onClick={() => setVisual(v.ROW4,'FALL')}/>}
          {<GameCard sel={mode[v.ROW4] === 'MINE'} logo={MINE} onClick={() => setVisual(v.ROW4,'MINE')}/>}
        </div>
        {mode[v.ROW4] !== v.HIDE_R4 && (
        <Show name={text[mode[v.ROW4]]} onClick={() => hideVisual(v.ROW4)} drop={() => hideView(v.DESC4)}/>)}
        {mode[v.DESC4] === 'show' && (<Overview game={mode[v.ROW4]} />)}
      </div>
    </main>
  );
}

export default Discover;



