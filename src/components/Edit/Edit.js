import React from 'react';
import './Edit.css';
import { useState } from "react";
import YouTube from 'react-youtube';

function Edit(props) {
  const className = !props.sel ? 'title_card' : 'title_card--selected';
  const initial = {
    avatar: '',
  }
  const [state, setState] = useState(initial)
  return (
    <div id='edit_page'>
      <div class='page_header'>Profile Edit</div>
      
      <div class='category_header'>Avatar</div>
      <div id='avatar_card'>
        <img src={state.avatar} alt=''></img>
      </div>

      <div class='category_header'>Platform Info</div>
      <div id='alias_card'>

      </div>

      <div id='profile_media'>
        <div class='youtube_col'>
         <div class='category_header'>Youtube Feed</div>
         <div class='youtube_card'>Alex</div>
        </div>
        <div class='spotify_col'>
         <div class='category_header'>Spotify Feed</div>
         <div class='spotify_card'>Alex</div>
        </div>
      </div>

    </div>
  );
}

export default Edit;