import React, { Component } from 'react'


import { fetchPostData } from '../services/blogService';
import { BlogListItem } from './blogListItem';





class Homepage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        const posts = fetchPostData();
        posts.then((listOfBlogPosts) => {
            this.setState({
                posts: listOfBlogPosts
            });
        });
    }

    // makeBlogList() {
    //     return this.state.posts.map(({ userId, id, title, body }) => {
    //         return <BlogListItem key={id} id={id} userId={userId} title={title} body={body} />
    //     })
    // }

    render() {
        const { posts } = this.state;

        return (
            <>
                <h4>POSTS</h4>
                <ul className="collection" >
                    {posts.map((post) => <BlogListItem key={post.id} {...post} />)}
                </ul>
            </>

        )
    }
}

export { Homepage }