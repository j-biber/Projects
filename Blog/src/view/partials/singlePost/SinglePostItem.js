import React from 'react';
import { Link } from 'react-router-dom';

const SinglePostItem = (props) => {
    return (
        <li><Link to={`/post/${props.post.id}`}>
            {props.post.title} - {props.post.beginningOfBody()}
        </Link></li>
    )
}

export { SinglePostItem };