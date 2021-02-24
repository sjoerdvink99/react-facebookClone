import React from "react";
import "./Widgets.css";

export default function Widgets() {
  return (
    <div className='widgets'>
      <iframe
        src=''
        width='340'
        height='100%'
        style={{ border: "none", overflow: "hidden" }}
        scrolling='no'
        frameBorder='0'
        allowTransparency='true'
        allow='encrypted-media'
      ></iframe>
    </div>
  );
}
