import React from 'react';
import './Comment.css';




function Comment(props) {
  return (
    <div id='commentGroup'>
      <div id='meta'>
        <div><strong>{props.author}</strong></div>
        <div><strong>{props.time}</strong></div>
      </div>
      <div id='commentText'>{props.text}</div>
    </div>
  );
}

export default Comment;