import React from "react";
import { Link } from "react-router-dom";
import "./PostComponents.css";

import { VideoPost } from "./VideoPost";
import { TextPost } from "./TextPost";
import { ImagePost } from "./ImagePost";

const renderPostComponent = post => {
  if (post.type === "video") {
    return <VideoPost url={post.videoUrl} comments={post.commentsNum} />;
  } else if (post.type === "image") {
    return <ImagePost src={post.imageUrl} comments={post.commentsNum} />;
  } else {
    return <TextPost text={post.text} comments={post.commentsNum} />;
  }
};

const PostItem = props => {
  return (
    <div className="row">
      <div className="col s12">
        <div className="card">
          <div className="card-image">{renderPostComponent(props.post)}</div>
          <div className="card-action">
            <span>{props.post.type}</span>
            <Link
              to={`/post/${props.post.type}/${props.post.id}`}
              className="comments"
            >
              {props.post.commentsNum} Comments
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PostItem };
