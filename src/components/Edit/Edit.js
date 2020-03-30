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

import { connect } from 'react-redux';


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

  const updateState = function(key,test) {
    setState({...state, [key]: test})
  }

  useEffect(() => {
    setState({...state, avatar: STAR})
  },[]);

  return (
    <div>
    <div id='edit_page'>
      
      <div class='page_header' onClick={''}>Profile Edit</div>

      <div class='category_header'>Avatar + Banner</div>
      <Avatar state={state} CHEF={CHEF} STAR={STAR} updateAvatar={updateState}/>

      <div class='category_header'>Platform Info</div>
      <AliasCard state={state} alias={state.DISCORD} updateAlias={updateState}/>

      <div class='category_header'>Youtube Feed</div>
      <Youtube opts={v.opts} state={state} updateVid={updateState} data={props.data}/>
      
      <div class='category_header'>Spotify Feed</div>
      <Spotify size={v.size} view={v.theme} theme={v.theme} data={props.data} updateSpotify={updateState}/>

      <div id='confirm_button'>
        <a href='/profile'>
          <button class='edit_button' onClick={props.toggle}>Confirm</button>
        </a>
      </div>
    </div>
    </div>
  );
}

const mapStateToProps = function(redux) {
  return redux;
};

// export default connect(mapStateToProps)(Edit);
export default Edit;