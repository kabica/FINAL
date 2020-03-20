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
      width: '600',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    const videos = this.props.videos;
    console.log(this.props.videos.id1)
    return (
      <div className='youtube'>
        <YouTube
          className="vid1"
          videoId={videos.id1}
          opts={opts}
          onReady={this._onReady}
        />
        <YouTube
          className="vid2"
          videoId={videos.id2}
          opts={opts}
          onReady={this._onReady}
        />
        <YouTube
          className="vid3"
          videoId={videos.id3}
          opts={opts}
          onReady={this._onReady}
        />
      </div>
    );
  }
 
}

export default Youtube