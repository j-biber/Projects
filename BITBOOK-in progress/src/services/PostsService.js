// import { Post } from "../entities/Post";
import { ImagePosts } from "../entities/ImagePosts";
import { VideoPosts } from "../entities/VideoPosts";
import { TextPosts } from "../entities/TextPosts";

const BASE_URL = "http://bitbookapi.azurewebsites.net/api";

// export { BASE_URL };

const url = BASE_URL + "/posts";

const fetchSinglePost = (postId, type) => {
  const url = `${BASE_URL}/${type}posts/${postId}`;

  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Key: "bitbookdev",
      SessionId: "2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE"
    }
  })
    .then(response => {
      return response.json();
    })
    .then(post => {
      if (post.type === "video") {
        return new VideoPosts(
          post.id,
          post.userId,
          post.videoUrl,
          post.dateCreated,
          post.type,
          post.commentsNum
        );
      }

      if (post.type === "text") {
        return new TextPosts(
          post.id,
          post.userId,
          post.text,
          post.dateCreated,
          post.type,
          post.commentsNum
        );
      }

      if (post.type === "image") {
        return new ImagePosts(
          post.id,
          post.userId,
          post.imageUrl,
          post.dateCreated,
          post.type,
          post.commentsNum
        );
      }
    });
};

const fetchPosts = () => {
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Key: "bitbookdev",
      SessionId: "2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE"
    }
  })
    .then(response => {
      return response.json();
    })

    .then(rawPosts => {
      const post = rawPosts.filter(post => {
        if (post.videoUrl) {
          return post.videoUrl.includes("https://www.youtube.com/embed/");
        }
        return true;
      });
      const postsArray = post.map(post => {
        if (post.type === "video") {
          return new VideoPosts(
            post.id,
            post.userId,
            post.videoUrl,
            post.dateCreated,
            post.type,
            post.commentsNum
          );
        }
        if (post.type === "text") {
          return new TextPosts(
            post.id,
            post.userId,
            post.text,
            post.dateCreated,
            post.type,
            post.commentsNum
          );
        }
        if (post.type === "image") {
          return new ImagePosts(
            post.id,
            post.userId,
            post.imageUrl,
            post.dateCreated,
            post.type,
            post.commentsNum
          );
        }
      });
      return postsArray;
    });
};

export { fetchPosts, fetchSinglePost };
