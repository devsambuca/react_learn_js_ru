import React from "react";
function Comment({ comment }) {
  return (
    <div>
      <p>
        {comment.text}
        <b>by {comment.author}</b>
      </p>
    </div>
  );
}
