const repliesDB = [
    {
        id: 0,
        commentId: 0,
        creator: getUser(1),
        body: "როგორ იტყვი ხოლმე რა",
        time: new Date("2018-04-25 16:48"),
        likers: [],
        isNew: true
    },
    {
        id: 1,
        commentId: 0,
        creator: getUser(0),
        body: "nu ityvi nu",
        time: new Date("2018-04-25 16:48"),
        likers: [getUser(1)],
        isNew: true
    }
]