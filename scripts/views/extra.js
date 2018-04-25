function profilePictureView(cover, picture){
    return `\
    <a href="#"><div class="post-profile-picture-wrapper">
        <div class="post-profile-picture-cover">
            <img src="${cover}" alt="Cover">
        </div>
        <div class="post-profile-picture">
            <img src="${picture}" alt="Profile Picture">
        </div>
    </div></a>
    `;
}