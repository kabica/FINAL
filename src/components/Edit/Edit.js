import React from 'react';
import './Edit.css';
import { useState } from "react";
import YouTube from 'react-youtube';
import SpotifyPlayer from 'react-spotify-player';
import DISCORD from '../img/discord.png'
import AliasCard from './AliasCard'

const onReady = function(event) {
  // access to player in all event handlers via event.target
  event.target.pauseVideo();
}
const opts = {
  width: '260',
  height: '180',
}
const size = {
  width: '100%',
  height: 200,
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'

function Edit(props) {

  const initial = {
    YT1: props.YT1 || 'Enter a video URL',
    YT2: props.YT2 || 'Enter a video URL',
    YT3: props.YT3 || 'Enter a video URL',
    SPOT1: props.SPOT1 || 'Enter a playlist URL',
    SPOT2: props.SPOT2 || 'Enter a playlist URL',
    SPOT3: props.SPOT3
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
      <AliasCard />

      <div class='category_header'>Youtube Feed</div>
      <div id='youtube_card'>
        <div id='videos'>
          <div id='video_col'>
            <YouTube id='vid'videoId="M7_s_mvC0O8"onReady={onReady}opts={opts}/>
            <input 
              placeholder='Enter a video URL'
              value={state.YT1 || ""}
              onChange={(event) => {setState({...state, YT1: event.target.value})}}
              type="text"
            />
          </div>
          <div id='video_col'>
            <YouTube id='vid'videoId="M7_s_mvC0O8"onReady={onReady}opts={opts}/>
            <input 
              placeholder='Enter a video URL'
              value={state.YT2 || ""}
              onChange={(event) => {setState({...state, YT2: event.target.value})}}
              type="text"
            />
          </div>
          <div id='video_col'>
            <YouTube id='vid'videoId="M7_s_mvC0O8"onReady={onReady}opts={opts}/>
            <input 
              placeholder='Enter a video URL'
              value={state.YT3 || ""}
              onChange={(event) => {setState({...state, YT3: event.target.value})}}
              type="text"
            />
          </div>
        </div>
      </div>

      <div class='category_header'>Spotify Feed</div>
        <div id='spotify_card'>
          <div id='videos'>
            <div id='video_col'>
            <SpotifyPlayer
              uri="spotify:album:1TIUsv8qmYLpBEhvmBmyBk"
              size={size}
              view={view}
              theme={theme}
            />
            <input 
              placeholder='Enter a playlist URL'
              value={state.SPOT1 || ""}
              onChange={(event) => {setState({...state, SPOT1: event.target.value})}}
              type="text"
            />
          </div>
          <div id='video_col'>
            <SpotifyPlayer
              uri="spotify:album:1TIUsv8qmYLpBEhvmBmyBk"
              size={size}
              view={view}
              theme={theme}
            />
            <input 
              placeholder='Enter a playlist URL'
              value={state.SPOT2 || ""}
              onChange={(event) => {setState({...state, SPOT2: event.target.value})}}
              type="text"
            />
          </div>
          <div id='video_col'>
            <SpotifyPlayer
              uri="spotify:album:1TIUsv8qmYLpBEhvmBmyBk"
              size={size}
              view={view}
              theme={theme}
            />
            <input 
              placeholder='Enter a playlist URL'
              value={state.SPOT3 || ""}
              onChange={(event) => {setState({...state, SPOT3: event.target.value})}}
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;