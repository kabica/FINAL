import React, { useState } from 'react';
import SpotifyPlayer from 'react-spotify-player';

function Spotify(props) {
  const initial = {
    uri1: '',
    uri2: '',
    uri3: ''
  };
  const [state, setState] = useState({...initial});


  return (
    <div id='spotify_card'>
          <div id='videos'>
            <div id='video_col'>
            <SpotifyPlayer
              uri={state.uri1 || props.data.uri1}
              size={props.size}
              view={props.view}
              theme={props.theme}
            />
            <input 
              placeholder='Enter a playlist URL'
              value={state.uri1 || ""}
              onChange={(event) => {
                setState({...state, uri1: event.target.value});
                sessionStorage.uri1 = event.target.value;
              }}
              type="text"
            />
          </div>
          <div id='video_col'>
            <SpotifyPlayer
              uri={state.uri2 || props.data.uri2}
              size={props.size}
              view={props.view}
              theme={props.theme}
            />
            <input 
              placeholder='Enter a playlist URL'
              value={state.uri2 || ""}
              onChange={(event) => {
                setState({...state, uri2: event.target.value});
                sessionStorage.uri2 = event.target.value;
              }}
              type="text"
            />
          </div>
          <div id='video_col'>
            <SpotifyPlayer
              uri={state.uri3 || props.data.uri3}
              size={props.size}
              view={props.view}
              theme={props.theme}
            />
            <input 
              id='vid_input3'
              placeholder='Enter a playlist URL'
              value={state.uri3 || ""}
              onChange={(event) => {
                setState({...state, uri3: event.target.value});
                sessionStorage.uri3 = event.target.value;
              }}
              type="text"
            />
          </div>
        </div>
      </div>
  );
}

export default Spotify;