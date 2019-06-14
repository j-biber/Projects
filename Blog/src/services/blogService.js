import Post from '../entities/Post';
import User from '../entities/User';
import fetchRandomElementsFromArray from '../fetchRandom';

const POSTS_BASE_URL = 'https://jsonplaceholder.typicode.com/posts';
const USERS_BASE_URL = 'https://jsonplaceholder.typicode.com/users';

const fetchPostData = () => {
    return fetch(POSTS_BASE_URL)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            const postArray = fetchRandomElementsFromArray(result, 6);

            const ourPosts = postArray.map((post) => {
                const { userId, id, title, body } = post;
                return new Post(userId, id, title, body);
            });

            console.log(ourPosts);
            return ourPosts;
        });
}

const fetchSinglePostData = (postId) => {
    return fetch(`${POSTS_BASE_URL}/${postId}`)
        .then((response) => {
            return response.json();
        })
};

const fetchUserData = (userId) => {
    return fetch(`${USERS_BASE_URL}/${userId}`)
        .then((response) => response.json())
        .then((result) => {
            const { id, name, username, email, address, phone, company } = result;
            return new User(id, name, username, email, address, phone, company);
        })
};

const fetchPostsFromUser = (userId) => {
    return fetch(`${POSTS_BASE_URL}?userId=${userId}`)
        .then((response) => response.json())
        .then((result) => {
            const randomPosts = fetchRandomElementsFromArray(result, 3);
            return randomPosts.map(({ userId, id, title, body }) => new Post(userId, id, title, body));
        })
};



export {
    fetchPostData,
    fetchSinglePostData,
    fetchUserData,
    fetchPostsFromUser
};