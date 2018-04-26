function getPostComments(postId){
    return commentsDB.filter(comment => comment.postId == postId);
}

function addComment(comment){
    comment.id = commentsDB.length;
    postsService.getPost(comment.postId).comments.push(comment);
}

var commentsService = {getPostComments, addComment};