import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

export default function Feed() {
  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />
      <Post
        id={key}
        profilePic={profilePic}
        message={message}
        timestamp={timestamp}
        username={username}
        image={image}
      />
    </div>
  );
}
