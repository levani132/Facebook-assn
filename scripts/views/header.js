function headerView(){
    return `
        <header class="header">
            <div class="header-container">
                <div class="inblock header-left">
                    <a href="#"><div class="fb-icons-1 inblock logo"></div></a>
                    <div class="inblock search-bar">
                        <div class="search-wrapper">
                            <input type="text" placeholder="Search" autocomplete="off" class="search-input">
                            <button class="search-button">
                                <span class="fb-icons-3 search-logo"></span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="inblock header-right clearfix">
                    <div class="header-icons-wrapper">
                        <div class="inblock notifications-bar">
                            <a href="#"><div class="inblock header-icons fb-icons-3 friend-requests"></div></a>
                            <a href="#"><div class="inblock header-icons fb-icons-1 messages"></div></a>
                            <a href="#"><div class="inblock header-icons fb-icons-3 notifications"></div></a>
                        </div>
                        <span class="header-sep"></span>
                        <div class="inblock extra-navs">
                            <a href="#"><div class="inblock header-extra-icons fb-icons-1 help-icon"></div></a>
                            <a href="#"><div class="inblock header-extra-icons fb-icons-1 drop-icon"></div></a>
                        </div>
                    </div>
                    <div class="header-links-wrapper">
                        <a class="header-img inblock header-links" href="#">
                            <img src="${loggedUser.picture}" alt="user" class="header-user-logo">
                            <div class="header-user-name inblock">${loggedUser.name}</div>
                        </a>
                        <span class="header-sep"></span>
                        <a class="header-links home-link inblock" href="">Home</a>
                    </div>
                </div>
            </div>
        </header>
    `;
}