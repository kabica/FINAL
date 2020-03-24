import React from 'react';
import SpotifyPlayer from 'react-spotify-player';

function Spotify(props) {

  return (
    <div id='spotify_card'>
          <div id='videos'>
            <div id='video_col'>
            <SpotifyPlayer
              uri="spotify:album:1TIUsv8qmYLpBEhvmBmyBk"
              size={props.size}
              view={props.view}
              theme={props.theme}
            />
            <input 
              placeholder='Enter a playlist URL'
              value={props.state.SPOT1 || ""}
              onChange={(event) => props.updateSpotify('SPOT1',event.target.value)}
              type="text"
            />
          </div>
          <div id='video_col'>
            <SpotifyPlayer
              uri="spotify:album:1TIUsv8qmYLpBEhvmBmyBk"
              size={props.size}
              view={props.view}
              theme={props.theme}
            />
            <input 
              placeholder='Enter a playlist URL'
              value={props.state.SPOT2 || ""}
              onChange={(event) => props.updateSpotify('SPOT2',event.target.value)}
              type="text"
            />
          </div>
          <div id='video_col'>
            <SpotifyPlayer
              uri="spotify:album:1TIUsv8qmYLpBEhvmBmyBk"
              size={props.size}
              view={props.view}
              theme={props.theme}
            />
            <input 
              placeholder='Enter a playlist URL'
              value={props.state.SPOT3 || ""}
              onChange={(event) => props.updateSpotify('SPOT3',event.target.value)}
              type="text"
            />
          </div>
        </div>
      </div>
  );
}

export default Spotify;