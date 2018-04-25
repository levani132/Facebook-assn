function getPostComments(postId){
    return commentsDB.filter(comment => comment.postId == postId);
}