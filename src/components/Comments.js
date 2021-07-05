import React, {useState} from "react"
import UpdateComment from "./UpdateComment.js"

const Comments = ({ comments }) => {
  const [displayCom, setDisplayCom] = useState(comments)

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    const filteredComment = comments.filter(comment => comment.user === event.target.searchBox.value)
    if (filteredComment.length > 0) {
      setDisplayCom(filteredComment)
    } else {
      setDisplayCom(comments)
      window.alert(`${event.target.searchBox.value} has no comments`)
    }
  }
  const handleRemoveClick = (id) => {
    const newCommentList = displayCom.filter(comment => comment.id !== id)
    setDisplayCom(newCommentList)
  }
  const handleSelectChange = (event) => {
    const change = event.target.value
    const newCommentList = comments.filter(comment => comment.user === change)
    if(change === "All") {
      return setDisplayCom(comments)
    } else {
      return setDisplayCom(newCommentList)
    }
  }

  return (
    <div>
      <h2>{comments.length} Comments</h2>
      <form onSubmit={handleSearchSubmit}>
        <input name="searchBox" type="text" placeholder="Search by Username" />
        <button>Search</button>
        <select onChange ={handleSelectChange}>
          <option>All</option>
          {comments.map(comment => <option>{comment.user}</option>)}
        </select>
      </form>
      <ul>
        {displayCom.map((comment) => (
          <>
            <UpdateComment 
              key={comment.id} 
              comment={comment}
            />
            <button onClick={() => handleRemoveClick(comment.id)}>Remove Comment</button>
          </>
          ))
        }
      </ul>
    </div>
  )
}

export default Comments