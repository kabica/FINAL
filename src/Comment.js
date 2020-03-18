import React from 'react';
import './Comment.css';




function Comment(props) {
  return (
    <div id='comment'>
      <div id='meta'>
        <div><strong>{props.author}</strong></div>
        <div><strong>{props.time}</strong></div>
      </div>
      <div id='content'>{props.text}</div>
    </div>
  );
}

export default Comment;