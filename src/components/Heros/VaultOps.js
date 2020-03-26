import React from 'react';
import BL_A from '../accessory_img/BL3_A.png'
import BL_B from '../accessory_img/BL3_B.png'
import BL_C from '../accessory_img/BL3_C.png'
import BL_D from '../accessory_img/BL3_D.png'
import './VaultOps.css'

function VaultOps(props) {
  return (
    <div id='character'>
      <div id='vault_row'>
        <img id='vault_image' src={BL_A} alt='logo'/>
      </div>
      <div id='vault_row'>
        <img id='vault_image' src={BL_B} alt='logo'/>
      </div>
      <div id='vault_row'>
        <img id='vault_image' src={BL_C} alt='logo'/>
      </div>
      <div id='vault_row'>
        <img id='vault_image' src={BL_D} alt='logo'/>
      </div>
    </div>
  );
}

export default VaultOps;