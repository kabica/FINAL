import React from 'react';
import YouTube from 'react-youtube';
import './YouTube.css'
 
class Youtube extends React.Component {
  VideoOnReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    const {videoId} = this.props
    return (
      <div className='youtube'>
        {/* <h1>Highlited Videos</h1> */}
        <YouTube
          videoId={videoId}
          opts={opts}
          onReady={this._onReady}
        />
      </div>
    );
  }
 
}

export default Youtube