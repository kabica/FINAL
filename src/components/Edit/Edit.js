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
import Youtube from './Youtube'
import Spotify from './Spotify';
import Avatar from './Avatar';

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
  const updateAlias = function(key,test) {
    // setState({...state, DISCORD: discord, STEAM: steam, UPLAY: uplay, BATTLE: battle, EPIC: epic, ORIGIN: origin})
    setState({...state, [key]: test})
  }
  const updateVid = function(key, test) {
    setState({...state, [key]: test})
  }
  const updateSpotify = function(key, test) {
    setState({...state, [key]: test})
  }
  const updateAvatar = function(key, test) {
    setState({...state, [key]: test})
  }
  useEffect(() => {
    setState({...state, avatar: STAR})
  },[]);

 
  return (
    <div id='edit_page'>
      <div class='page_header'>Profile Edit</div>
      
      <div class='category_header'>Avatar + Banner</div>
      <Avatar state={state} CHEF={CHEF} STAR={STAR} updateAvatar={updateAvatar}/>

      <div class='category_header'>Platform Info</div>
      <AliasCard state={state} alias={state.DISCORD} updateAlias={updateAlias}/>

      <div class='category_header'>Youtube Feed</div>
      <Youtube onReady={onReady} opts={v.opts} state={state} updateVid={updateVid}/>
      
      <div class='category_header'>Spotify Feed</div>
      <Spotify size={v.size} view={v.theme} theme={v.theme} state={state} updateSpotify={updateSpotify}/>

      <div id='confirm_button'>
        <a href='/profile'>
          <button onClick={updateProfile}>Confirm</button>
        </a>
      </div>
    </div>
  );
}

export default Edit;