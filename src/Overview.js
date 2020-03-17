import React from 'react';
import './Overview.css';
import OW_WIDE from './img/ow_wide.png'
import R6B from './img/R6B.png'
import R6_INV from './img/R6_INV.png'
import PatchNote from './PatchNote'
import R6 from './img/R6B.png'
import DEST_2 from './img/DEST_2.png'
import PUBG from './img/PUBG_banner.png'

const attack = 'ATTACKER DRONE SPAWN';
const note = <p>One of the more impactful changes to note this season is how we approached the behavior of barricade debris. Previously, when partially breaking barricades, there would be a piece of debris that could get stuck in the remainder of the barricade and since this is done client-side, it could put a player at a significant advantage toward their opponent, due to a line of sight being blocked for one player but not for the other.<br></br><br></br>To avoid this situation and the frustration that comes with it, partially breaking a barricade with a weapon or a melee hit will now create much smaller debris. Additionally, when completely destroying a barricade, the behavior of the debris is improved to minimize occlusion caused by stacked debris on the top of a window sill and the base of a door frame.</p>;

const images = {
  PUBG: PUBG,
  FORT: R6_INV,
  R6: R6,
  DEST_2: DEST_2
}

function Overview(props) {
  return (
    <div id='game'>
      <div id='banner'>
        <img id=''src={images[props.game]} alt="logo" />
      </div>
      <div id='notes'>
        {<PatchNote title={'BARRICADE DEBRIS CONSISTENCY'} text={note}/>}
        {<PatchNote title={attack} text={note}/>}
        
      </div>
    </div>
  );
}

export default Overview;