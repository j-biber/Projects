import React from 'react';
import PropTypes from "prop-types"

const UserItem = ({ user }) => {
    return (

        <li className="card">
            <img src={user.picture.large} className="card-img-top" alt="..." />
            <div className="card-body">
                <div className="username"> {user.name}</div>
                <div className="email-address">Email: {user.hideEmailAddress()}</div>
                <div className="dob">Date of birth: {user.getDOB()}</div>
            </div>
        </li>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export {UserItem}