function postView(post){
    return `
    <div class="post-container item-container" id="post-${post.id}">
        <div class="post-header">
            <div class="post-user-pic inblock profile-picture">
                <a href="#"><img src="${post.creator.picture}" alt="${post.creator.name} ${post.creator.lastName}"></a>
            </div>
            <div class="inblock post-header-about">
                <div class="post-header-text">
                    <a class="post-header-user" href="#">${post.creator.name} ${post.creator.lastName}</a>
                    <span class="post-header-action">${post.action}</span>
                </div>
                <div class="post-header-about-extra">
                    <a class="post-time" href="#">${timePassed(post.time)}</a>
                    <div class="dot">.</div>
                    <span class="post-can-see">
                        <span class="inblock post-extra-icon fb-icons-6 fb-icon-globe"></span>
                    </span>
                </div>
            </div>
            <div class="post-options inblock">
                <span class="inblock post-header-icon fb-icons-2 fb-icon-options"></span>
            </div>
        </div>
        <div class="post-body">
            <div class="post-main">
                ${post.body}
            </div>
            <div class="post-actions">
                <div class="post-action like">
                    <div class="action-button-icon inblock">
                        <span class="inblock post-actions-icon fb-icons-7 fb-icon-like"></span>
                    </div>
                    <span class="post-action-text">Like</span>
                </div>
                <div class="post-action comment">
                    <div class="action-button-icon inblock">
                        <span class="inblock post-actions-icon fb-icons-7 fb-icon-comment"></span>
                    </div>
                    <span class="post-action-text">Comment</span>
                </div>
                <div class="post-action share">
                    <div class="action-button-icon inblock">
                        <span class="inblock post-actions-icon fb-icons-7 fb-icon-share"></span>
                    </div>
                    <span class="post-action-text">Share</span>
                </div>
            </div>
        </div>
        ${post.likers.length ? `<div class="post-likes ${post.isNew ? "new" : ""}">
            <a href="#">
                <div class="post-reactions-icons inblock">
                    <span style="z-index:9;" class="post-reactions-icon inblock fb-icons-7 fb-icon-like-1"></span>
                    <span style="z-index:8;" class="post-reactions-icon inblock fb-icons-7 fb-icon-heart"></span>
                    <span style="z-index:7;" class="post-reactions-icon inblock fb-icons-7 fb-icon-wow"></span>
                </div>
            </a>
            <a href="#" class="post-reactions-text inblock">
                ${likersToString(post.likers)}
            </a>
        </div>` : ''}
        <div class="post-footer">
            <div class="divider"></div>
            ${commentsView(post.comments)}
            <div class="post-new-comment">
                <div class="post-comment-picture-wrapper inblock">
                    <a class="post-comment-picture profile-picture">
                        <img src="img/users/user.jpg" alt="User">
                    </a>
                </div>
                <form action="#" onsubmit="addNewComment(${post.id}, event)" class="post-comment-input-wrapper">
                    <input class="post-comment-input" autocomplete="off" name="new-comment" type="text" placeholder="Write a comment...">
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

function postsView(posts){
    var result = `<div class="feed">`;
    posts.forEach(post => result += postView(post));
    result += `</div>`
    return result;
}