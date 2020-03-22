import React from 'react';
import { useState } from "react";



function AliasCard(props) {
  const initial = {
    DISCORD: props.DISCORD || 'Discord Alias'
  }
  const [state, setState] = useState({initial})

  return (
    <div id='alias_card'>
        <div id='alias_card_row'>

          <div id='alias_card_col'>
            <div id='alias_row'>
              <p class='alias_header'>Discord: </p>
              <input 
                value={state.DISCORD || ''}
                placeholder='Enter Discord alias'
                onChange={(event) => setState({...state, DISCORD: event.target.value})}
                type='text'
              />
            </div>
            <div id='alias_row'>
              <p class='alias_header'>Battlnet: </p>
              <input 
                value={state.DISCORD || ''}
                placeholder='Enter Discord alias'
                onChange={(event) => setState({...state, DISCORD: event.target.value})}
                type='text'
              />
            </div>
          </div>

          <div id='alias_card_col'>
            <div id='alias_row'>
              <p class='alias_header'>Steam: </p>
              <input 
                value={state.DISCORD || ''}
                placeholder='Enter Discord alias'
                onChange={(event) => setState({...props.state, DISCORD: event.target.value})}
                type='text'
              />
            </div>
            <div id='alias_row'>
              <p class='alias_header'>Epic: </p>
              <input 
                value={props.state.DISCORD || ''}
                placeholder='Enter Discord alias'
                onChange={(event) => setState({...props.state, DISCORD: event.target.value})}
                type='text'
              />
            </div>
          </div>

          <div id='alias_card_col'>
            <div id='alias_row'>
              <p class='alias_header'>Origin: </p>
              <input 
                value={state.DISCORD || ''}
                placeholder='Enter Discord alias1'
                onChange={(event) => setState({...props.state, DISCORD: event.target.value})}
                type='text'
              />
            </div>
            <div id='alias_row'>
              <p class='alias_header'>Uplay: </p>
              <input 
                value={state.DISCORD || ''}
                placeholder='Enter Discord alias'
                onChange={(event) => setState({...props.state, DISCORD: event.target.value})}
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