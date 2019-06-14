class TextPosts {
  constructor(
    id,
    userId,
    text,
    dateCreated,
    type,
    commentsNum
    // userDisplayName,
  ) {
    this.id = id;
    this.userId = userId;
    this.text = text;
    this.dateCreated = dateCreated;
    this.type = type;
    this.commentsNum = commentsNum;
    // this.userDisplayName = userDisplayName;
  }
}

export { TextPosts };
