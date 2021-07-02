import React, { useState } from "react"
import UpdateComment from "./UpdateComment.js"

const Comments = ({ comments }) => {

  return(
  <div>
    <h2>{comments.length} Comments</h2>
  <ul>
    {comments.map((comment) => (
     <UpdateComment comment={comment}/>
    ))}
  </ul>
  </div>
  )}

export default Comments