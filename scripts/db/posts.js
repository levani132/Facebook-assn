const postsDB = [
    {
        id: 0,
        creator: getUser(2),
        action: "updated his profile picture.",
        time: new Date("2018-04-25 16:44"),
        body: profilePictureView("img/post1cover.jpg", "img/post1.jpg"),
        likers: [
            getUser(0),
            getUser(5),
            getUser(6),
            getUser(7),
            getUser(8),
            getUser(9),
            getUser(10),
            getUser(11),
            getUser(12)
        ],
        comments: getPostComments(0),
        isNew: false
    }
];