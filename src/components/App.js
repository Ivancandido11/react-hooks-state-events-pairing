import React from "react"
import video from "../data/video.js";
import Header from './Header.js'

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
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
