import React from 'react';
import { useState } from "react";



function AliasCard(props) {
  const initial = {
    DISCORD: props.DISCORD || 'DISCORD Alias',
    BATTLENET: props.BATTLENET || 'BATTLENET Alias',
    STEAM: props.STEAM || 'STEAM Alias',
    EPIC: props.EPIC || 'EPIC Alias',
    ORIGIN: props.ORIGIN || 'ORIGIN Alias',
    UPLAY: props.UPLAY || 'UPLAY Alias'
  }
  const [state, setState] = useState({initial})

  return (
    <div id='alias_card'>
        <div id='alias_card_row'>

          <div id='alias_card_col'>
            <div id='alias_row'>
              <p class='alias_header'>Discord: </p>
              <input 
                value={props.state.DISCORD || ''}
                placeholder='Enter Discord alias'
                onChange={(event) => props.updateAlias('DISCORD',event.target.value)}
                type='text'
              />
            </div>
            <div id='alias_row'>
              <p class='alias_header'>Battlnet: </p>
              <input 
                value={props.state.BATTLENET || ''}
                placeholder='Enter Battlenet Alias'
                onChange={(event) => props.updateAlias('BATTLENET',event.target.value)}
                type='text'
              />
            </div>
          </div>

          <div id='alias_card_col'>
            <div id='alias_row'>
              <p class='alias_header'>Steam: </p>
              <input 
                value={props.state.STEAM || ''}
                placeholder='Enter Steam alias'
                onChange={(event) => props.updateAlias('STEAM',event.target.value)}
                type='text'
              />
            </div>
            <div id='alias_row'>
              <p class='alias_header'>Epic: </p>
              <input 
                value={props.state.EPIC || ''}
                placeholder='Enter Epic Alias'
                onChange={(event) => props.updateAlias('EPIC',event.target.value)}
                type='text'
              />
            </div>
          </div>

          <div id='alias_card_col'>
            <div id='alias_row'>
              <p class='alias_header'>Origin: </p>
              <input 
                value={props.state.ORIGIN || ''}
                placeholder='Enter Origin Alias'
                onChange={(event) => props.updateAlias('ORIGIN',event.target.value)}
                type='text'
              />
            </div>
            <div id='alias_row'>
              <p class='alias_header'>Uplay: </p>
              <input 
                value={props.state.UPLAY || ''}
                placeholder='Enter Uplay Alias'
                onChange={(event) => props.updateAlias('UPLAY',event.target.value)}
                type='text'
              />
            </div>
          </div>

        </div>
        
        <div class='note'>NOTE: <br></br>Alias' are used to uniquely identify you on the platforms listed above, people will use these to search for you + join your party!</div>
      </div>
  );
}

export default AliasCard;