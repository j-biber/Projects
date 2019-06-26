import React from 'react';
import PropTypes from "prop-types"
import { UserItem } from './UserItem'

const Main = (props) => {
    return (
        <main>
            <ul>{props.users.map((user, index) => <UserItem user={user} key={index} />)}</ul>
        </main>
    )

}

Main.propTypes = {
    users: PropTypes.array.isRequired
 }
 

export { Main }