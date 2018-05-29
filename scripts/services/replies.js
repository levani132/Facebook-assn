function getCommentReplies(commentId){
    return repliesDB.filter(reply => reply.commentId == commentId);
}

function addReply(reply){
    reply.id = repliesDB.length;
    repliesDB.push(reply);
    commentsService.getComment(reply.commentId).replies.push(reply);
    save("replies");
}

var repliesService = {getCommentReplies, addReply};