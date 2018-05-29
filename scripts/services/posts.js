function getAllPosts(){
    return postsDB.sort((a, b) => a.time < b.time);
}

function getPost(id){
    return postsDB.find(post => post.id == id);
}

function addPost(post){
    post.id = postsDB.length;
    postsDB.push(post);
    save("posts");
}

var postsService = {getAllPosts, getPost, addPost};