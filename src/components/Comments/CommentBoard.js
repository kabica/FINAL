import React from 'react';
import './CommentBoard.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Comment from './Comment'
import { useState, useEffect} from "react";
const axios = require('axios');



const getComment = function() {
  return axios.get('http://localhost:8000/comments')
  .then(comms => comms)
  .catch(error => console.log(error));
};

const postComment = function(text) {
  return axios.post('http://localhost:8000/comments', {
    author: 1,
    user: 1,
    text: text
  })
  .then(getComment())
  .catch(err => console.log(err))
};



function CommentBoard(props) {
  const [mode, setMode] = useState('');
  const [state, setState] = useState({comments: []});
  
  useEffect(() => {
    getComment()
    .then(comms => {
      setState(state => ({...state, comments: comms ? comms.data : ['no']}))
    })
  },[]);

  return (
    <div id='container'>
      <div id='scroll'>{state.comments.map(post => <Comment author={'alex'} time={'11:26am'}text={post.text || 'no'}/>)}</div>
      <div id='chatInput'>
        <form noValidate autoComplete="off">
          <TextField value={mode} id="outlined-secondary"label="Let the world know!"variant="outlined"color="primary"onChange={(event) => setMode(event.target.value)}/>
        </form>
        <Button id='button'variant="outlined" color="primary" onClick={() => {postComment(mode);}}>
          Post!
        </Button>
      </div>
    </div>
  );
}

export default CommentBoard;





