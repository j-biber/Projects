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
            <ul className={isGrid}>
                {props.users.map((user, index) => <UserItem user={user} key={index} />)}
            </ul>
        </main>
    )

}

const UserItem = ({ user }) => {
    return (
        <li className="media my-4">
            <img src={user.picture.thumbnail} className="mr-3" alt="..." />
            <div className="media-body">
                <div className="username">Name: {user.name}</div>
                <div className="email-address">Email: {user.email}</div>
                <div className="dob">Date of birth: {user.dob.toLocaleDateString('en-GB')}</div>
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
