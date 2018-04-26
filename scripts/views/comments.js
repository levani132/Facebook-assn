function commentView(comment){
    return `
    <div class="post-comment ${comment.isNew ? "new" : ""}" id="comment-${comment.id}">
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
                    <a href="#" onclick="openReplies(${comment.id}, event)" class="usual-a">Reply</a>
                    <div class="dot">.</div>
                    <a href="#" class="usual-a post-time">${timePassed(comment.time)}</a>
                </div>
            </div>
            <a href="#" onclick="openReplies(${comment.id}, event)" class="more-replies ${comment.replies.length ? '' : 'hidden'}">
                <span class="inblock more-replies-icon fb-icons-7 fb-icon-reply"></span>
                <span class="more-replies-text usual-a">
                    ${comment.replies.length} Replies
                </span>
                <div class="dot">.</div>
                <span class="usual-a post-time">3m</span>
            </a>
            <div class="replies-wrapper hidden">
                ${repliesView(comment.replies)}
            </div>
            <div class="post-new-comment hidden">
                <div class="post-comment-picture-wrapper inblock">
                    <a class="post-comment-picture profile-picture">
                        <img src="${loggedUser.picture}" alt="User">
                    </a>
                </div>
                <form action="#" onsubmit="addNewReply(${comment.id}, event)" class="post-comment-input-wrapper">
                    <input class="post-comment-input" autocomplete="off" name="new-comment" type="text" placeholder="Write a reply...">
                    <div class="inblock post-new-comment-items">
                        <a href="#" class="inblock post-new-comment-item">
                            <div class="comment-item-title">
                                Insert an emoji
                            </div>
                            <div class="inblock fb-icons-8 fb-icon-pale-smile post-comment-icon"></div>
                        </a>
                        <a href="#" class="inblock post-new-comment-item">
                            <div class="comment-item-title">
                                Attach a Photo or a Video
                            </div>
                            <div class="inblock fb-icons-8 fb-icon-pale-camera post-comment-icon"></div>
                        </a>
                        <a href="#" class="inblock post-new-comment-item">
                            <div class="comment-item-title">
                                Post a GIF
                            </div>
                            <div class="inblock fb-icons-8 fb-icon-pale-gif post-comment-icon"></div>
                        </a>
                        <a href="#" class="inblock post-new-comment-item">
                            <div class="comment-item-title">
                                Post a sticker
                            </div>
                            <div class="inblock fb-icons-8 fb-icon-pale-sticker post-comment-icon"></div>
                        </a>
                    </div>
                </form>
            </div>
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