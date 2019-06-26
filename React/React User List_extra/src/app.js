const ourUsers = fetchData(users);

const Header = () => {
    return (
        <header>
            <h1>User List</h1>
        </header>
    )
}

const Main = (props) => {
    return (
        <main>
            <ul>{props.users.map((user, index) => <UserItem user={user} key={index} />)}</ul>
        </main>
    )

}

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

const Footer = () => {
    return (
        <footer>Copyright 2019</footer>
    )
}

const App = (props) => {
    return (
        <>
            <Header />
            <Main users={ourUsers} />
            <Footer />
        </>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));