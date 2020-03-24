import SpotifyPlayer from 'react-spotify-player';
import React from 'react'
import './Spotify.css'
 

class Spotify extends React.Component {

  render () {
    // size may also be a plain string using the presets 'large' or 'compact'
    const size = {
      width: '30%',
      height: 400,
    };
    const view = 'list'; // or 'coverart'
    const theme = 'black'; // or 'white'
    const albums = this.props.albums;
    return (
      <div className='spotify'>
        <SpotifyPlayer
          className="spot"
          uri={albums.uri1}
          size={size}
          view={view}
          theme={theme}
        />
        <SpotifyPlayer
          uri={albums.uri2}
          size={size}
          view={view}
          theme={theme}
        />
        <SpotifyPlayer
          uri={albums.uri3}
          size={size}
          view={view}
          theme={theme}
        />
      </div>
    )
  }
}

export default Spotify