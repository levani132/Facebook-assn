function getCommentReplies(commentId){
    return repliesDB.filter(reply => reply.commentId == commentId);
}