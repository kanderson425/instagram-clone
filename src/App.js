import React, { useState, useEffect } from "react";
import "./App.css";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "kanderson425",
      imageUrl:
        "https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg",
      caption: "Wow it works",
    },
    {
      username: "csmith52",
      imageUrl:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=640:*",
      caption: "I like puppies",
    },
    {
      username: "ssmith163",
      imageUrl:
        "https://icatcare.org/app/uploads/2018/06/Layer-1704-1200x630.jpg",
      caption: "I like cats",
    },
    {
      username: "taletell420",
      imageUrl:
        "https://i1.sndcdn.com/artworks-000268545731-9tescq-t500x500.jpg",
      caption: "Wow, I'm so high!",
    },
  ]);

  return (
    <div className="App">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram Logo"
        />
      </div>
      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
