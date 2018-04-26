function newPostView(){
    return `
        <div class="new-post-container" tabindex="-1">
            <div class="new-post-header">
                <a href="#" class="inblock new-post-header-item make-post active">
                    <span class="inblock new-post-header-icon fb-icons-5 fb-icon-pen"></span>
                    <span class="new-post-header-text">Make Post</span>
                    <span class="make-post-arrow"></span>
                </a>
                <span class="header-sep"></span>
                <a href="#" class="inblock new-post-header-item">
                    <span class="inblock new-post-header-icon fb-icons-5 fb-icon-book"></span>
                    <span class="new-post-header-text">Photo/Video Album</span>
                </a>
                <span class="header-sep"></span>
                <a href="#" class="inblock new-post-header-item">
                    <span class="inblock new-post-header-icon fb-icons-5 fb-icon-camera"></span>
                    <span class="new-post-header-text">Live Video</span>
                </a>
            </div>
            <div class="new-post-body">
                <div class="post-user-pic inblock">
                    <a href="#"><img src="${loggedUser.picture}" alt="Levan Beroshvili"></a>
                </div>
                <form action="#" onsubmit="addNewPost(event)" class="inline">
                    <input class="new-post-input" autocomplete="off" name="new-post" placeholder="What's on your mind, Levan?" />
                </form>
            </div>
            <div class="divider"></div>
            <div class="new-post-footer">
                <div class="new-post-footer-item inblock">
                    <span class="inblock new-post-footer-icon fb-icons-2 fb-icon-photo-2"></span>
                    <span class="new-post-footer-text">Photo/Video</span>
                </div>
                <div class="new-post-footer-item inblock">
                    <span class="inblock new-post-footer-icon fb-icons-2 fb-icon-smile"></span>
                    <span class="new-post-footer-text">Feeling/Activity</span>
                </div>
                <div class="new-post-footer-item inblock">
                    <span class="inblock new-post-footer-icon fb-icons-2 fb-icon-options"></span>
                </div>
            </div>
        </div>
        <span></span>
    `;
}