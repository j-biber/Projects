import React, { Component } from 'react'
import { fetchSinglePostData } from '../../../services/blogService';
import { fetchUserData } from '../../../services/blogService';
import { fetchPostsFromUser } from '../../../services/blogService';
import { SinglePost } from './SinglePost';
import { SinglePostItem} from './SinglePostItem';

class SinglePostPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: {},
            user: {},
            userPosts: [],
        }
    }

    fetchUser(userId) {
        fetchUserData(userId)
            .then(user => {
                this.setState({ user });
            })
    }

    fetchUserPosts(userId) {
        fetchPostsFromUser(userId)
            .then(userPosts => {
                console.log(userPosts);
                this.setState({ userPosts });
            })
    }

    fetchPost() {
        fetchSinglePostData(this.props.match.params.id)
            .then(post => {
                this.setState({ post });

                this.fetchUser(post.userId);
                this.fetchUserPosts(post.userId);
            });
    }

    componentDidMount() {
        this.fetchPost();
    }

    // makePostList() {
    //     return this.state.userPosts.map((post) => {
    //         return <SinglePostItem post={post} />
    //     })
    // }

    render() {
        const { userPosts } = this.state;

        return (
            <div>
                <SinglePost title={this.state.post.title} user={this.state.user} body={this.state.post.body} />
                <hr />
                <h3>3 more posts from the same autor</h3>
                <ul>
                    {userPosts.map((post) => {
                        console.log(post);
                        return <SinglePostItem key={post.id} post={post} />
                    })}
                </ul>
            </div>
        )


    }
}

export { SinglePostPage };

// {userPosts.map((post) => <SinglePostItem title={post.title} />)}