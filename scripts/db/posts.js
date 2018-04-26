const postsDB = [
    {
        id: 0,
        creator: usersService.getUser(2),
        action: "updated his profile picture.",
        time: new Date("2018-04-25 16:44"),
        body: profilePictureView("img/post1cover.jpg", "img/post1.jpg"),
        likers: [
            usersService.getUser(0),
            usersService.getUser(5),
            usersService.getUser(6),
            usersService.getUser(7),
            usersService.getUser(8),
            usersService.getUser(9),
            usersService.getUser(10),
            usersService.getUser(11),
            usersService.getUser(12)
        ],
        comments: getPostComments(0),
        isNew: false
    }
];