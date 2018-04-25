function commentView(comment){
    return `
    <div class="post-comment ${comment.isNew ? "new" : ""}">
        <div class="post-comment-picture-wrapper inblock">
            <a class="post-comment-picture profile-picture">
                <img src="${comment.creator.picture}" alt="User">
            </a>
        </div>
        <div class="post-comment-main inblock">
            <div class="post-comment-body inblock">
                <span class="post-comment-text">
                    <a href="#" class="post-comment-user usual-a">
                        ${comment.creator.name} ${comment.creator.lastName}
                    </a>
                    ${comment.body}
                    <div class="post-comment-options inblock">
                        <a href="#" class="inblock post-comment-options-icon fb-icons-2 fb-icon-options"></a>
                    </div>
                </span>
                <div class="post-comment-footer">
                    <a href="#" class="usual-a">Like</a>
                    <div class="dot">.</div>
                    <a href="#" class="usual-a">Reply</a>
                    <div class="dot">.</div>
                    <a href="#" class="usual-a post-time">${timePassed(comment.time)}</a>
                </div>
            </div>
            ${repliesView(comment.replies)}
        </div>
    </div>
    `;
}

function commentsView(comments){
    var result = `<div class="post-comments">`;
    comments.forEach(comment => result += commentView(comment));
    result += `</div>`
    return result;
}