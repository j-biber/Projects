import React, { Component } from "react";

import { CreatePost } from "../modalButtons/CreatePost";
import { VideoPost } from "./PostComponents/VideoPost.js";
import { TextPost } from "./PostComponents/TextPost";
import { ImagePost } from "./PostComponents/ImagePost";
import { fetchPosts } from "../../../services/PostsService";
import { PostItem } from "./PostComponents/PostItem";

class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  fetchData = () => {
    fetchPosts().then(showPosts => {
      this.setState({ posts: showPosts });
    });
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const postItems = this.state.posts;
    const posts = postItems.map(post => {
      return <PostItem key={post.id} post={post} />;
    });

    return (
      <div className="container">
        {posts}
        <VideoPost />
        <TextPost />
        <ImagePost />

        <CreatePost onPostCreated={this.fetchData} />
      </div>
    );
  }
}

export { Feed };
