import React from 'react';
import { Link } from "react-router-dom";

const BlogListItem = ({ userId, id, title, body }) => {

    return (
        <li className="collection-item avatar">
            <Link to={`/post/${id}`} className="title">
                <i className="material-icons">{title}</i>
            </Link>
            
            <p>{body}</p>
        </li>
    )

}

export {
    BlogListItem
}