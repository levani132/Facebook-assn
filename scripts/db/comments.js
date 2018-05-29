var commentsDB = [
    {
        id: 0,
        postId: 0,
        creator: usersService.getUser(0),
        body: "WOW",
        time: new Date("2018-04-25 16:47"),
        likers: [usersService.getUser(2)],
        replies: repliesService.getCommentReplies(0),
        isNew: false
    },
    {
        id: 1,
        postId: 0,
        creator: usersService.getUser(2),
        body: "Am suratshi dzaan klasnad ar var? xD xD",
        time: new Date("2018-04-25 16:47"),
        likers: [usersService.getUser(2), usersService.getUser(0)],
        replies: repliesService.getCommentReplies(1),
        isNew: true
    }
];

if(!localStorage.postsDB){
    localStorage.commentsDB = JSON.stringify(commentsDB);
}else{
    commentsDB = JSON.parse(localStorage.commentsDB);
    commentsDB.forEach(comment => comment.replies = repliesService.getCommentReplies(comment.id));
}