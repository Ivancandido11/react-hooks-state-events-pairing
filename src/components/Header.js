import React from "react"

const Header = ({
  title,
  url,
  views,
  createdAt,
  upvotes,
  downvotes
 }) => (
<div>
  <iframe
        width="919"
        height="525"
        src= {url}
        frameborder="0"
        allowfullscreen
        title={title}
      /> 
      <h1>{title}</h1>
      <p>{views} Views | Upladed {createdAt}</p>
      <button id="upvotes">{upvotes} 👍</button>
      <button id="downvotes">{downvotes} 👎</button>
      <br />
      <button id="dhideComments">Hide Comments</button>
  </div>

)

export default Header