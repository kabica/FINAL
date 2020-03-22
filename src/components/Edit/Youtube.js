import React from 'react';
import { useState } from "react";
import YouTube from 'react-youtube';

const onReady = function(event) {
  event.target.pauseVideo();
}

function Youtube(props) {

  return (
    <div id='youtube_card'>
        <div id='videos'>
          <div id='video_col'>
            <YouTube id='vid'videoId="M7_s_mvC0O8"onReady={onReady}opts={props.opts}/>
            <input 
              placeholder='Enter a video URL'
              value={props.state.YT1 || ""}
              onChange={(event) => props.updateVid('YT1',event.target.value)}
              type="text"
            />
          </div>
          <div id='video_col'>
            <YouTube id='vid'videoId="M7_s_mvC0O8"onReady={onReady}opts={props.opts}/>
            <input 
              placeholder='Enter a video URL'
              value={props.state.YT2 || ""}
              onChange={(event) => props.updateVid('YT2',event.target.value)}
              type="text"
            />
          </div>
          <div id='video_col'>
            <YouTube id='vid'videoId="M7_s_mvC0O8"onReady={onReady}opts={props.opts}/>
            <input 
              value={props.state.YT3 || ""}
              onChange={(event) => props.updateVid('YT3',event.target.value)}
              type="text"
            />
          </div>
        </div>
      </div>
  );
}

export default Youtube;