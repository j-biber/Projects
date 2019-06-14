
import React from 'react'
import { UserListItem } from './UserListItem'
import { UserCardItem } from './UserCardItem'

const UserList = (props) => {

    const userCards = props.users.map((user, index) => {
        return <UserCardItem key={index} user={user} />
    });

    const userList = props.users.map((user, index) => {
        return <UserListItem key={index} user={user} />
    });


    const renderGrid = () => {
        return (
            <div className="container">
                <div className="row">
                    {userCards}
                </div>
            </div>
        )
    }

    const renderList = () => {
        return (
            <div className="container">
                <ul className=" collection">
                    {userList}
                </ul>
            </div>
        );
    }

    return props.isGrid ? renderGrid() : renderList();
}

export {
    UserList
}