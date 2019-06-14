import React from 'react';

const SinglePost = (props) => {

    return (
        <div>
            <h3>{props.title}</h3>
            <a>{props.user.name}</a>
            <p>{props.body}</p>
        </div>
    )
}

export { SinglePost };