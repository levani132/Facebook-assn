function getCommentReplies(commentId){
    return repliesDB.filter(reply => reply.commentId == commentId);
}

function addReply(reply){
    reply.id = repliesDB.length;
    repliesDB.push(reply);
    commentsService.getComment(reply.commentId).replies.push(reply);
}

var repliesService = {getCommentReplies, addReply};