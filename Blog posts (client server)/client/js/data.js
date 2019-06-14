import Post from './entities/post.js'

const fetchData = (onSuccess) => {
    fetch('http://127.0.0.1:3000')
    .then((response) => {
      return response.json();
    })
    .then((posts) => {
      return posts.map(({id, title, intro}) => new Post (id, title, intro))
    })
    .then((ourPosts) => onSuccess(ourPosts));
}

export {fetchData}