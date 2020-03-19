import React from 'react';
import './PatchNote.css';




function PatchNote(props) {
  return (
    <div id='patch_note'>
      <div id='note'>
        {props.title}
      </div>
      <div id='content'>
        <strong>{props.text}</strong>
      </div>
    </div>
  );
}

export default PatchNote;