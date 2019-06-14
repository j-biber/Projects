import React, { Component } from "react";
import { fetchPostComments } from "../../../services/CommentService";
import { Comments } from "../PostDetails/PostDetailsComponents/Comments";
import { AddComment } from "./PostDetailsComponents/AddComment";
import { fetchSinglePost } from "../../../services/PostsService";
import { TextPost } from "../Feed/PostComponents/TextPost";
import { VideoPost } from "../Feed/PostComponents/VideoPost";
import { ImagePost } from "../Feed/PostComponents/ImagePost";

class PostDetails extends Component {
  // return <AddComment />;

  constructor(props) {
    super(props);

    this.state = {
      postId: this.props.match.params.id,
      type: this.props.match.params.type,
      post: {},
      postComments: []
    };
  }

  fetchComments = () => {
    fetchPostComments(this.state.postId).then(postComments =>
      this.setState({ postComments })
    );
  };

  fetchPost() {
    const { postId, type } = this.state;

    fetchSinglePost(postId, type).then(post => {
      this.setState({ post });
    });
  }

  componentDidMount() {
    this.fetchPost();
    this.fetchComments();
  }

  renderPost = post => {
    if (post.type === "video") {
      return <VideoPost key={post.id} url={this.state.post.videoUrl} />;
    }
    if (post.type === "image") {
      return <ImagePost key={post.id} src={this.state.post.imageUrl} />;
    }
    if (post.type === "text") {
      return <TextPost key={post.id} text={this.state.post.text} />;
    }
  };

  render() {
    const { postComments, post } = this.state;

    if (!postComments.length) {
      return (
        <>
          {this.renderPost(post)}
          <AddComment
            afterCreation={this.fetchComments}
            post={this.state.postId}
          />

          <p> There are no comments</p>
        </>
      );
    } else {
      return (
        <div className="container">
          {this.renderPost(post)}
          <AddComment
            afterCreation={this.fetchComments}
            post={this.state.postId}
          />

          {postComments.map(comment => (
            <Comments
              key={comment.id}
              author={comment.authorName}
              comment={comment}
            />
          ))}
        </div>
      );
    }
  }
}

export { PostDetails };
