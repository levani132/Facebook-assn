function getComment(id){
    return commentsDB[id];
}

function getPostComments(postId){
    return commentsDB.filter(comment => comment.postId == postId);
}

function addComment(comment){
    comment.id = commentsDB.length;
    commentsDB.push(comment);
    postsService.getPost(comment.postId).comments.push(comment);
}

var commentsService = {getPostComments, addComment, getComment};