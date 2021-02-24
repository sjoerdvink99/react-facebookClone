import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import { InsertEmoticon, PhotoLibrary, Videocam } from "@material-ui/icons";
import "./MessageSender.css";

export default function MessageSender() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // some db stuff
    setInput("");
    setImageUrl("");
  };

  return (
    <div className='messageSender'>
      <div className='messageSender__top'>
        <Avatar src='' />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className='messageSender__input'
            placeholder="What's on your mind?"
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder='Image URL (Optional)'
          />
          <button onClick={handleSubmit} type='submit'>
            Hidden button
          </button>
        </form>
      </div>
      <div className='messageSender__bottom'>
        <div className='messageSender__option'>
          <Videocam style={{ color: "red" }} />
          <h3>Live video</h3>
        </div>
        <div className='messageSender__option'>
          <PhotoLibrary style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className='messageSender__option'>
          <InsertEmoticon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}
