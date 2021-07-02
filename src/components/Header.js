import React, {useState} from "react"
import Comments from "./Comments.js"

const Header = ({
  title,
  url,
  views,
  createdAt,
  upvotes,
  downvotes,
  comments
}) => {
  const [upvote, setUpvote] = useState(upvotes)
  const [downvote, setDownvote] = useState(downvotes)
  const [isOn, setIsOn] = useState(false)

  const handleUpvoteClick = () => {
    setUpvote(upvote + 1)
  }
  const handleDownvoteClick = () => {
    setDownvote(downvote + 1)
  }
  const handleHideCommentsClick = () => {
    setIsOn((isOn)=> !isOn)
  }
  
  return (
  <div>
    <iframe
      width="919"
      height="525"
      src= {url}
      frameBorder="0"
      allowFullScreen
      title={title}
    /> 
    <h1>{title}</h1>
    <p>{views} Views | Upladed {createdAt}</p>
    <button onClick={handleUpvoteClick} id="upvotes">{upvote} 👍</button>
    <button onClick={handleDownvoteClick} id="downvotes">{downvote} 👎</button>
    <br />
    <button onClick={handleHideCommentsClick} id="hideComments">{isOn ? "Show Comments" : "Hide Comments"}</button>
    {isOn ? null : <Comments comments={comments}/>}
  </div>
  )
}

export default Header