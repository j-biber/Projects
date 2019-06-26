import { Comments } from "../entities/Comments";

const BASE_URL = "http://bitbookapi.azurewebsites.net/api";
const url = BASE_URL + "/comments";

const addComment = (forPostWithId, commentText) => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Key: "bitbookdev",
      SessionId: "2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE"
    },
    body: JSON.stringify({ body: commentText, postId: forPostWithId })
  }).then(response => {
    return response.json();
  });
};

const fetchPostComments = id => {
  return fetch(`${BASE_URL}/comments?postId=${id}`, {
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
    .then(rawComments => {
      console.log("nase prvo clg", rawComments);
      const comments = rawComments
        .map(({ id, dateCreated, body, postId, authorName, authorId }) => {
          return new Comments(
            id,
            dateCreated,
            body,
            postId,
            authorName,
            authorId
          );
        })
        .sort((prev, next) => {
          return next.id - prev.id;
        });
      return comments;
    });
};

export { fetchPostComments, addComment };
