import React from 'react';
import './Characters.css';
import BANGALORE from '../img/BANGALORE.png'
import CAUSTIC from '../img/CAUSTIC.png'
import CRYPTO from '../img/CRYPTO.png'
import BLOODHOUND from '../img/BLOODHOUND.png'

function Characters(props) {
  return (
    <div id='character'>
      <div id='characterImg'>
        <img id='charImg'src={BANGALORE} alt="logo" />
        <img id='charImg'src={CRYPTO} alt="logo" />
        <img id='charImg'src={CAUSTIC} alt="logo" />
        <img id='charImg'src={BLOODHOUND} alt="logo" />
      </div>
      <div id='characterImg'>
        <img id='charImg'src={BANGALORE} alt="logo" />
        <img id='charImg'src={CRYPTO} alt="logo" />
        <img id='charImg'src={CAUSTIC} alt="logo" />
        <img id='charImg'src={BLOODHOUND} alt="logo" />
      </div>
    </div>
  );
}

export default Characters;