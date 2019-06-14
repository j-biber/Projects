import React from 'react';
import PropTypes from 'prop-types';
import './UserListItem.css';


const UserListItem = (props) => {
    const { photo, gender } = props.user;


    return (
        <li className={gender === "female" ? "collection-item avatar red lighten-5" : "collection-item avatar"}>
            <img src={photo.thumbnail} alt='user' className="circle" />
            <span className="title">name: {props.user.getFullName()}</span>
            <p>email: {props.user.getHiddenEmail()}</p>
            <p>date of birth: {props.user.getBirthFormat()}</p>
        </li >
    )
}

UserListItem.propTypes = {
    photo: PropTypes.string
}

UserListItem.defaultProps = {
    photo: ''
}

export {
    UserListItem
}