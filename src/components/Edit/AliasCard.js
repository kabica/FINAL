import React from 'react';
import { useState } from "react";



function AliasCard(props) {

  return (
    <div id='alias_card'>
        <div id='alias_card_row'>

          <div id='alias_card_col'>
            <div id='alias_row'>
              <p class='alias_header'>Discord: </p>
              <input></input>
            </div>
            <div id='alias_row'>
              <p class='alias_header'>Battlnet: </p>
              <input></input>
            </div>
          </div>

          <div id='alias_card_col'>
            <div id='alias_row'>
              <p class='alias_header'>Steam: </p>
              <input></input>
            </div>
            <div id='alias_row'>
              <p class='alias_header'>Epic: </p>
              <input></input>
            </div>
          </div>

          <div id='alias_card_col'>
            <div id='alias_row'>
              <p class='alias_header'>Origin: </p>
              <input></input>
            </div>
            <div id='alias_row'>
              <p class='alias_header'>Uplay: </p>
              <input></input>
            </div>
          </div>

        </div>
        
        <div class='note'>NOTE: <br></br>Alias' are used to uniquely identify you on the platforms listed above, people will use these to search for you + join your party!</div>
      </div>
  );
}

export default AliasCard;