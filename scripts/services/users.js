function getAllUsers(){
    return usersDB;
}

function getUser(id){
    return usersDB[id];
}

var usersService = {getAllUsers, getUser};