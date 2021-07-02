import React from "react"
import video from "../data/video.js";
import Header from './Header.js'

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      {/* <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameborder="0"
        allowfullscreen
        title="Thinking in React"
      /> */}
      <Header 
        title={ video.title }
        url={ video.embedUrl }
        views={video.views}
        createdAt = {video.createdAt}
        upvotes={video.upvotes}
        downvotes={video.downvotes}
        comments={video.comments}
      />
    </div>
  );
}

export default App;
