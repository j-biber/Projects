class VideoPosts {
  constructor(
    id,
    userId,
    videoUrl,
    dateCreated,
    type,
    commentsNum
    // userDisplayName,
  ) {
    this.id = id;
    this.userId = userId;
    this.videoUrl = videoUrl;
    this.dateCreated = dateCreated;
    this.type = type;
    this.commentsNum = commentsNum;
    // this.userDisplayName = userDisplayName;
  }
}

export { VideoPosts };
