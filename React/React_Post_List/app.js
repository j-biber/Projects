const Header = (props) => {
    return (
        <header>
            <h1>Blog</h1>
        </header>

    )
};

const Post = (props) => {
    return (
        <div data-id={props.post.id} data-userId={props.post.userId} className="post">
            <h3 className="title">{props.post.title}</h3>
            <p className="post-body">{props.post.body}</p>
        </div>
    )
}

const Main = (props) => {
    return (
        <main>
            {props.postList.map(post => <Post post={post} />)}
        </main>
    )
}

const App = (props) => {
    return (
        <>
            <Header />
            <Main postList={data} />
            <footer></footer>
        </>
    )
};


ReactDOM.render(<App />, document.querySelector('#root'));