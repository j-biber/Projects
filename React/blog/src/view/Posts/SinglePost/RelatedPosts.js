import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { postService } from '../../../services/PostService'

class RelatedPosts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: null
        }
    }

    fetchPosts = () => {
        postService.fetchAuthorRelatedPost(this.props.authorId)
            .then(listOfRelatedPost => this.setState({
                posts: listOfRelatedPost
            }))
    }

    componentDidMount() {
        this.fetchPosts();
    }

    render() {
        const { posts } = this.state;

        if (!posts) {
            return (
                <article className="related-posts">
                    <h2>No other posts from this author</h2>
                </article>
            )
        }
        
        return (
            <article className="related-posts">
                <h2> more posts from same author</h2>
                <ul>
                    {posts.map(({ title, body, authorId, postId }) => <li>
                        <Link to={`/posts/${authorId}/${postId}`}><span className="bold">{title.slice(0, 15)}</span> - {body.slice(0, 70)}</Link>
                    </li>)}

                </ul>
            </article>
        )

    }
}

export { RelatedPosts }