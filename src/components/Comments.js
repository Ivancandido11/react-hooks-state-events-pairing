import React from "react"

const Comments = ({ comments }) => (
  <div>
    <h2>{comments.length} Comments</h2>
  <ul>
    {comments.map((comment) => (
      <div>
        <h3>{comment.user}</h3>
        <p>{comment.comment}</p>

        </div>

    ))}
  </ul>
  </div>
)

export default Comments