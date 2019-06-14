import React, { Component } from 'react'
import { Header } from "./partials/header"
import { Footer } from "./partials/footer"
import { UserList } from "./users/UserList"
import { fetchUserData } from "../services/userService"

import './App.css';


class Homepage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            headerTitle: '',
            isGrid: this.isGridLayoutInUse(),
            users: [],
        }
    }

    isGridLayoutInUse() {
        return !!JSON.parse(localStorage.getItem('isGrid'));
    }

    componentDidMount() {
        const users = fetchUserData();
        users.then((listOfUsers) => {
            console.log(listOfUsers);
            this.setState({
                headerTitle: 'React Users',
                users: listOfUsers
            });
            console.log(this.state);
        });

    }

    changeUsers = () => {
        const users = fetchUserData();

        users.then((listOfUsers) => {
            this.setState({
                users: listOfUsers
            });
        });
    }

    changeView = () => {
        const newLayout = !this.state.isGrid;

        this.setState({ isGrid: newLayout });
        localStorage.setItem('isGrid', newLayout)
    }

    render() {
        return (
            <div>
                <Header changeUsers={this.changeUsers} changeView={this.changeView} title={this.state.headerTitle} isGrid={this.state.isGrid} />
                <main>
                    <UserList users={this.state.users} isGrid={this.state.isGrid} />

                </main>
                <Footer />
            </div>
        );
    }
}


export default Homepage;
