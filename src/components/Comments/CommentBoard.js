import React from 'react';
import './CommentBoard.css';
import Comment from './Comment'
import { useState, useEffect} from "react";
const axios = require('axios');




const comments = [
  {
    author: 'JoanOfArk',
    time: '03/22/19',
    text: 'It is great that I can see all the game sI enjoy in one place!'
  },
  {
    author: 'Picasso',
    time: '03/29/19',
    text: 'Welcome to the Netflix of gaming, so cool to see all of this here.'
  },
  {
    author: 'JoanOfArk',
    time: '04/01/19',
    text: 'It is great that I can see all the game sI enjoy in one place!'
  },
  {
    author: 'JoanOfArk',
    time: '03/22/19',
    text: 'It is great that I can see all the game sI enjoy in one place!'
  },
  {
    author: 'Picasso',
    time: '03/29/19',
    text: 'Welcome to the Netflix of gaming, so cool to see all of this here.'
  },
  {
    author: 'JoanOfArk',
    time: '04/01/19',
    text: 'It is great that I can see all the game sI enjoy in one place!'
  },
  {
    author: 'MasterChef',
    time: '04/22/20',
    text: 'You guys should check out my gaming playlists on Spotify, if those songs dont hype you up, then nothing will!'
  },
  {
    author: 'MasterChef',
    time: '11:26 am',
    text: 'Borderlands 3 really imporoved from BL2, love the new graphics and maybe giving Destiny2 a run for its money!'
  },
]


function CommentBoard(props) {
  const [mode, setMode] = useState('');
  const [state, setState] = useState(comments)
  const postComment = function() {
    setState([...state, {author: 'Masterhef', time: 'Just now', text: mode}])
    setMode('');
  };
 

  return (
    <div id='comment_container'>
      <div id='scroll'>{state.map(post => <Comment author={post.author} time={post.time} text={post.text}/>)}</div>
      <div id='chatInput'>
        <input 
          id='comment_board'
          value={mode || ''}
          placeholder='Post a comment!'
          onChange={(event) => setMode(event.target.value)}
        />
        <div id='comment_button' onClick={() => {postComment();}}>
          Post!
        </div>
      </div>
    </div>
  );
}

export default CommentBoard;





