class ImagePosts {
  constructor(
    id,
    userId,
    imageUrl,
    dateCreated,
    type,
    commentsNum
    // userDisplayName,
  ) {
    this.imageUrl = imageUrl;
    this.id = id;
    this.dateCreated = dateCreated;
    this.userId = userId;
    this.type = type;
    this.commentsNum = commentsNum;
    // this.userDisplayName = userDisplayName;
  }
}

export { ImagePosts };
