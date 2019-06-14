class Post {
    constructor(userId, id, title, body) {
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.body = body;
    }

    beginningOfBody () {
        const bodyBegin = this.body.split(' ').slice(0, 4).join(' ');
        return bodyBegin + '...';
    }

    // styleTitle() {
    //     const titleArray = this.title.split(' ');
    //     const newTitle = (`${titleArray[0]} ${titleArray[1]} ${titleArray[2]}`).toUpperCase();
    //     return newTitle;
    // }
}

export default Post;
