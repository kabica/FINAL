import React from 'react';
import './Comment.css';




function Comment(props) {
  return (
    <div id='comment'>
      {props.text}
    </div>
  );
}

export default Comment;