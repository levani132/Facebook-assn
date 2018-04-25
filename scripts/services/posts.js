function getAllPosts(){
    return postsDB;
}

function getPost(id){
    return postsDB[id];
}

function addPost(post){
    post.id = postsDB.length;
    postsDB.push(post);
}

var postsService = {getAllPosts, getPost, addPost};