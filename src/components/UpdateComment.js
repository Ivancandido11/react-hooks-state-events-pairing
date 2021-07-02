import React, {useState} from "react"

const UpdateComment = ({comment}) => {
  const [upvote, setUpvote] = useState(0)
  const [downvote, setDownvote] = useState(0)

  const handleUpVoteClick = () => { 
    setUpvote(upvote + 1)
  }
  const handleDownVoteClick = () => { 
    setDownvote(downvote + 1)
  }

return (
  <div key={comment.id}>
  <h3>{comment.user}</h3>
  <p>{comment.comment}</p>
<button onClick ={handleUpVoteClick} id={comment.id}>{upvote}👍</button>
<button onClick ={handleDownVoteClick} id={comment.id}>{downvote}👎</button>
</div>
)}

export default UpdateComment