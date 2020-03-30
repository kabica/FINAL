import React from 'react';
import { useState } from "react";
import YouTube from 'react-youtube';

const onReady = function(event) {
  event.target.pauseVideo();
}

function Youtube(props) {
  const initial = {
    id1: '',
    id2: '',
    id3: '',
  }
  const [state, setState] = useState({...initial});
  const getID = function(URL) {
    return URL.split('v=')[1];
  }

  return (
    <div id='youtube_card'>
        <div id='videos'>
          <div id='video_col'>
            <YouTube id='vid'videoId={getID(state.id1) || props.data.id1} onReady={onReady}opts={props.opts}/>
            <input 
              placeholder='Enter a video URL'
              value={state.id1 || ""}
              onChange={(event) => {
                setState({...state, id1: event.target.value});
                sessionStorage.id1 = event.target.value;
              }}
              type="text"
            />
          </div>
          <div id='video_col'>
            <YouTube id='vid'videoId={getID(state.id2) || props.data.id2} onReady={onReady}opts={props.opts}/>
            <input 
              placeholder='Enter a video URL'
              value={state.id2 || ""}
              onChange={(event) => {
                setState({...state, id2: event.target.value});
                sessionStorage.id2 = event.target.value;
              }}
              type="text"
            />
          </div>
          <div id='video_col'>
            <YouTube id='vid'videoId={getID(state.id3) || props.data.id3} onReady={onReady}opts={props.opts}/>
            <input 
              id='vid_input3'
              placeholder='Enter a video URL'
              value={state.id3 || ""}
              onChange={(event) => {
                setState({...state, id3: event.target.value});
                sessionStorage.id3 = event.target.value;
              }}
              type="text"
            />
          </div>
        </div>
      </div>
  );
}

export default Youtube;