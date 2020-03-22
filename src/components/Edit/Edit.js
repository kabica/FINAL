import React, { useEffect } from 'react';
import './Edit.css';
import { useState } from "react";
import YouTube from 'react-youtube';
import SpotifyPlayer from 'react-spotify-player';
import DISCORD from '../img/discord.png'
import AliasCard from './AliasCard'
import { v } from './editConfig';
import axios from 'axios';
import CHEF from '../img/halo.png'
import STAR from '../img/star.png'

const onReady = function(event) {
  // access to player in all event handlers via event.target
  event.target.pauseVideo();
}



function Edit(props) {
  const initial = {
    MODE: 'done',
    YT1: props.YT1 || 'Enter a video URL',
    YT2: props.YT2 || 'Enter a video URL',
    YT3: props.YT3 || 'Enter a video URL',
    SPOT1: props.SPOT1 || 'Enter a playlist URL',
    SPOT2: props.SPOT2 || 'Enter a playlist URL',
    SPOT3: props.SPOT3 || 'Enter a playlist URL',
    avatar: CHEF,
    BANNER: props.BANNER || 'Enter a banner image URL',
    DISCORD: props.DISCORD || 'Discord alias',
    STEAM: props.STEAM || 'Steam alias',
  };
  const [state, setState] = useState({initial});
  const updateProfile = function(text) {
    setState({...state, MODE: 'saving'})
    return axios.post('http://localhost:8000/alex', {
      video1: state.YT1 || '',
      video2: state.YT2 || '',
      video3: state.YT3 || '',
      song1: state.SPOT1 || '',
      song2: state.SPOT2 || '',
      song3: state.SPOT3 || '',
      user: 1,
      DISCORD: state.DISCORD || '',
      STEAM: state.STEAM || '',
      UPLAY: state.UPLAY || '',
      BATTLE: state.BATTLE || '',
      EPIC: state.EPIC || '',
      ORIGIN: state.ORIGIN || '',
    })
    .then(() => setState({...state, MODE: 'done'}))
    .catch(err => console.log(err))
  };
  const updateAlias = function(discord, steam, uplay, battle, epic, origin) {
    // setState({...state, DISCORD: discord, STEAM: steam, UPLAY: uplay, BATTLE: battle, EPIC: epic, ORIGIN: origin})
  }
  useEffect(() => {
    setState({...state, avatar: STAR})
  },[]);

 
  return (
    <div id='edit_page'>
      <div class='page_header'>Profile Edit</div>
      
      <div class='category_header'>Avatar + Banner</div>
      <div id='avatar_card'>
        <img id='current_img'src={state.avatar} alt=''></img>
        <div id='profile_options'>
          <div id='avatar_options'>
            <img id='avatar_img'src={CHEF} alt='' onClick={() => setState({...state, avatar: CHEF})}></img>
            <img id='avatar_img'src={CHEF} alt=''></img>
            <img id='avatar_img'src={CHEF} alt=''></img>
            <img id='avatar_img'src={CHEF} alt=''></img>
            <img id='avatar_img'src={CHEF} alt=''></img>
            <img id='avatar_img'src={CHEF} alt=''></img>
          </div>
          <div id='banner_select'>
            <div class='banner_header'>Banner URL:</div>
            <input
              value={state.BANNER || ''}
              placeholder='Enter a banner image URL'
              onChange={(event) => {setState({...state, BANNER: event.target.value})}}
              type="text"
            />
          </div>
        </div>
        
      </div>

      <div class='category_header'>Platform Info</div>
      <AliasCard state={state} alias={state.DISCORD} updateAlias={updateAlias}/>

      <div class='category_header'>Youtube Feed</div>
      <div id='youtube_card'>
        <div id='videos'>
          <div id='video_col'>
            <YouTube id='vid'videoId="M7_s_mvC0O8"onReady={onReady}opts={v.opts}/>
            <input 
              placeholder='Enter a video URL'
              value={state.YT1 || ""}
              onChange={(event) => {setState({...state, YT1: event.target.value})}}
              type="text"
            />
          </div>
          <div id='video_col'>
            <YouTube id='vid'videoId="M7_s_mvC0O8"onReady={onReady}opts={v.opts}/>
            <input 
              placeholder='Enter a video URL'
              value={state.YT2 || ""}
              onChange={(event) => {setState({...state, YT2: event.target.value})}}
              type="text"
            />
          </div>
          <div id='video_col'>
            <YouTube id='vid'videoId="M7_s_mvC0O8"onReady={onReady}opts={v.opts}/>
            <input 
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
              size={v.size}
              view={v.view}
              theme={v.theme}
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
              size={v.size}
              view={v.view}
              theme={v.theme}
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
              size={v.size}
              view={v.view}
              theme={v.theme}
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
      <div id='confirm_button'>
        <a href='/profile'>
        <button onClick={updateProfile}>Confirm</button>
        </a>
        
      </div>
    </div>
  );
}

export default Edit;