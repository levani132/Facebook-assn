var usersDB = [
    {
        id: 0,
        name: "Levan",
        lastName: "Beroshvili",
        isActive: false,
        time: "3m",
        picture: "img/users/user.jpg"
    },
    {
        id: 1,
        name: "Ani",
        lastName: "Beroshvili",
        isActive: true,
        time: "1m",
        picture: "img/users/user1.jpg"
    },
    {
        id: 2,
        name: "Rezi",
        lastName: "Maglaperidze",
        isActive: true,
        time: "1m",
        picture: "img/users/user2.jpg"
    },
    {
        id: 3,
        name: "ჩარბაძე",
        lastName: "თაკო",
        isActive: true,
        time: "1m",
        picture: "img/users/user3.jpg"
    },
    {
        id: 4,
        name: "Anni",
        lastName: "Rostomashvili",
        isActive: true,
        time: "1m",
        picture: "img/users/user4.jpg"
    },
    {
        id: 5,
        name: "სალი",
        lastName: "გოჩაშვილი",
        isActive: true,
        time: "1m",
        picture: "img/users/user5.jpg"
    },
    {
        id: 6,
        name: "Saba",
        lastName: "Natroshvili",
        isActive: true,
        time: "1m",
        picture: "img/users/user6.jpg"
    },
    {
        id: 7,
        name: "Vache",
        lastName: "Katsadze",
        isActive: false,
        time: "1m",
        picture: "img/users/user7.jpg"
    },
    {
        id: 8,
        name: "Soso",
        lastName: "Kvrivishvili",
        isActive: true,
        time: "1m",
        picture: "img/users/user8.jpg"
    },
    {
        id: 9,
        name: "Nini",
        lastName: "Gdzelidze",
        isActive: true,
        time: "1m",
        picture: "img/users/user9.jpg"
    },
    {
        id: 10,
        name: "Giorgi",
        lastName: "Sikharulidze",
        isActive: true,
        time: "1m",
        picture: "img/users/user10.jpg"
    },
    {
        id: 11,
        name: "Vaso",
        lastName: "Rachvelishvili",
        isActive: false,
        time: "1m",
        picture: "img/users/user11.jpg"
    },
    {
        id: 12,
        name: "Eka",
        lastName: "Beroshvili",
        isActive: true,
        time: "1m",
        picture: "img/users/user12.jpg"
    },
    {
        id: 13,
        name: "Natia",
        lastName: "Sonishvili",
        isActive: true,
        time: "1m",
        picture: "img/users/user13.jpg"
    },
    {
        id: 14,
        name: "Sandro",
        lastName: "Jikia",
        isActive: false,
        time: "2h",
        picture: "img/users/user14.jpg"
    },
    {
        id: 15,
        name: "Giorgi",
        lastName: "Wiklauri",
        isActive: false,
        time: "1m",
        picture: "img/users/user15.jpg"
    },
    {
        id: 16,
        name: "Beka",
        lastName: "Giguashvili",
        isActive: true,
        time: "1m",
        picture: "img/users/user16.jpg"
    },
    {
        id: 17,
        name: "Khatia",
        lastName: "Margalitadze",
        isActive: false,
        time: "7h",
        picture: "img/users/user17.jpg"
    },
    {
        id: 18,
        name: "Nodo",
        lastName: "Sanaia",
        isActive: true,
        time: "1m",
        picture: "img/users/user18.jpg"
    },
    {
        id: 19,
        name: "Likuna",
        lastName: "Chekurishvili",
        isActive: true,
        time: "1m",
        picture: "img/users/user19.jpg"
    },
    {
        id: 20,
        name: "Sandro",
        lastName: "Lomadze",
        isActive: true,
        time: "1m",
        picture: "img/users/user20.jpg"
    },
    {
        id: 21,
        name: "Dato",
        lastName: "Salayaia",
        isActive: true,
        time: "1m",
        picture: "img/users/user21.jpg"
    },
    {
        id: 22,
        name: "Nina",
        lastName: "Gongladze",
        isActive: true,
        time: "1m",
        picture: "img/users/user22.jpg"
    },
    {
        id: 23,
        name: "Ani",
        lastName: "Nozadze",
        isActive: true,
        time: "1m",
        picture: "img/users/user23.jpg"
    },
    {
        id: 24,
        name: "Cotne",
        lastName: "Pipia",
        isActive: true,
        time: "1m",
        picture: "img/users/user24.jpg"
    },
    {
        id: 25,
        name: "Levan",
        lastName: "Shanava",
        isActive: true,
        time: "1m",
        picture: "img/users/user25.jpg"
    }
];

if(!localStorage.usersDB){
    localStorage.usersDB = JSON.stringify(usersDB);
}else{
    usersDB = JSON.parse(localStorage.usersDB);
}