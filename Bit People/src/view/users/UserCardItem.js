
import React from 'react'
import PropTypes from 'prop-types'


const UserCardItem = (props) => {

    const { name, photo } = props.user

    return (
        <div className="col s4">
            <div className="card">
                <div className="card-image">
                    <img src={photo.large} alt='user' />
                    <span className="card-title">{name.first}</span>
                </div>
                <div className="card-content">
                    <p>{props.user.getHiddenEmail()}</p>
                    <p>Birth date: {props.user.getBirthFormat()}</p>
                </div>
            </div>
        </div>
    )
}

UserCardItem.propTypes = {
    photo: PropTypes.string
}

UserCardItem.defaultProps = {
    photo: ''
}

export {
    UserCardItem
}