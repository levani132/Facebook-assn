function replyView(reply){
    return `
    <div class="post-comment comment-reply ${reply.isNew ? "new" : ""}">
        <div class="post-comment-picture-wrapper inblock">
            <a class="post-comment-picture profile-picture">
                <img src="${reply.creator.picture}" alt="User">
            </a>
        </div>
        <div class="post-comment-main inblock">
            <div class="post-comment-body inblock">
                <span class="post-comment-text">
                    <a href="#" class="post-comment-user usual-a">
                        ${reply.creator.name} ${reply.creator.lastName}
                    </a>
                    ${reply.body}
                    <div class="post-comment-options inblock">
                        <a href="#" class="inblock post-comment-options-icon fb-icons-2 fb-icon-options"></a>
                    </div>
                </span>
                <div class="post-comment-footer">
                    <a href="#" class="usual-a">Like</a>
                    <div class="dot">.</div>
                    <a href="#" class="usual-a">Reply</a>
                    <div class="dot">.</div>
                    <a href="#" class="usual-a post-time">${timePassed(reply.time)}</a>
                </div>
            </div>
        </div>
    </div>
    `;
}

function repliesView(replies){
    var result = `<div class="replies">`;
    replies.forEach(reply => result += replyView(reply));
    result += `</div>`
    return result;
}