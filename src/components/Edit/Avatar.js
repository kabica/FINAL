import React from 'react';


function Avatar(props) {

  return (
    <div id='avatar_card'>
        <img id='current_img'src={props.state.avatar} alt=''></img>
        <div id='profile_options'>
          <div id='avatar_options'>
            <img id='avatar_img'src={props.CHEF} alt='' onClick={() => props.updateAvatar('avatar', props.CHEF)}></img>
            <img id='avatar_img'src={props.STAR} alt='' onClick={() => props.updateAvatar('avatar', props.STAR)}></img>
            <img id='avatar_img'src={props.CHEF} alt=''></img>
            <img id='avatar_img'src={props.CHEF} alt=''></img>
            <img id='avatar_img'src={props.CHEF} alt=''></img>
            <img id='avatar_img'src={props.CHEF} alt=''></img>
          </div>
          <div id='banner_select'>
            <div class='banner_header'>Banner URL:</div>
            <input
              value={props.state.BANNER || ''}
              placeholder='Enter a banner image URL'
              onChange={(event) => props.updateAvatar('BANNER',event.target.value)}
              type="text"
            />
          </div>
        </div>
      </div>
  );
}

export default Avatar;