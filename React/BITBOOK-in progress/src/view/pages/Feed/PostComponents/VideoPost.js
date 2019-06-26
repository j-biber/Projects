import React from "react";
import "./PostComponents.css";

const VideoPost = props => {
  const { url } = props;
  return (
    <div className="video-container">
      <iframe title="video" src={url} frameBorder="0" allowFullScreen />
    </div>
  );
};

export { VideoPost };
