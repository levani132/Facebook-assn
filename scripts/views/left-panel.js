function leftPanelView(){
    return `
        <div class="left-panel">
            <div class="left-panel-container">
                <div class="left-panel-section">
                    <ul class="section-list">
                        <li class="section-list-item">
                            <a href="#" title="${loggedUser.name} ${loggedUser.lastName}" class="section-item-a">
                                <span class="section-icon">
                                    <div class="inblock fb-icons-2">
                                        <img src="${loggedUser.picture}" alt="${loggedUser.name} ${loggedUser.lastName}" class="side-user">
                                    </div>
                                </span>
                                <span class="section-list-text">${loggedUser.name} ${loggedUser.lastName}</span>
                            </a>
                        </li>
                    </ul>
                    <ul class="section-list">
                        <li class="section-list-item active">
                            <a href="#" title="News Feed" class="section-item-a">
                                <span class="section-icon">
                                    <div class="inblock fb-icons-2 fb-icon-news"></div>
                                </span>
                                <span class="section-list-text">News Feed</span>
                            </a>
                            <div class="section-item-options-btn section-icon">
                                <a href="#options"><div class="fb-icons-2 fb-icon-options"></div></a>
                            </div>
                        </li>
                        <li class="section-list-item">
                            <a href="#" title="Messenger" class="section-item-a">
                                <span class="section-icon">
                                    <div class="inblock fb-icons-2 fb-icon-messenger"></div>
                                </span>
                                <span class="section-list-text">Messenger</span>
                            </a>
                            <div class="section-item-options-btn section-icon">
                                <a href="#options"><div class="fb-icons-2 fb-icon-options"></div></a>
                            </div>
                        </li>
                    </ul>
                    <ul class="section-list">
                        <div class="section-title">Shortcuts</div>
                        <a class="section-edit" href="#">Edit</a>
                        <li class="section-list-item">
                            <a href="#" title="გაძლიერებული ალგორითმები" class="section-item-a">
                                <span class="section-icon">
                                    <div class="inblock fb-icons-2 fb-icon-hat"></div>
                                </span>
                                <span class="section-list-text">გაძლიერებული ალგორითმები</span>
                            </a>
                            <div class="inblock section-number">1</div>
                            <div class="section-item-options-btn section-icon">
                                <a href="#options"><div class="fb-icons-2 fb-icon-options"></div></a>
                            </div>
                        </li>
                        <li class="section-list-item">
                            <a href="#" title="კომპიუტერული მეცნიერებები" class="section-item-a">
                                <span class="section-icon">
                                    <div class="inblock fb-icons-2 fb-icon-people"></div>
                                </span>
                                <span class="section-list-text">კომპიუტერული მეცნიერებები</span>
                            </a>
                            <div class="inblock section-number">1</div>
                            <div class="section-item-options-btn section-icon">
                                <a href="#options"><div class="fb-icons-2 fb-icon-options"></div></a>
                            </div>
                        </li>
                    </ul>
                    <ul class="section-list">
                        <div class="section-title">Explore</div>
                        <li class="section-list-item">
                            <a href="#" title="Events" class="section-item-a">
                                <span class="section-icon">
                                    <div class="inblock fb-icons-2 fb-icon-calendar"></div>
                                </span>
                                <span class="section-list-text">Events</span>
                            </a>
                            <div class="inblock section-number">5</div>
                        </li>
                        <li class="section-list-item">
                            <a href="#" title="Groups" class="section-item-a">
                                <span class="section-icon">
                                    <div class="inblock fb-icons-2 fb-icon-people"></div>
                                </span>
                                <span class="section-list-text">Groups</span>
                            </a>
                            <div class="inblock section-number">1</div>
                        </li>
                        <li class="section-list-item">
                            <a href="#" title="Pages" class="section-item-a">
                                <span class="section-icon">
                                    <div class="inblock fb-icons-2 fb-icon-flag"></div>
                                </span>
                                <span class="section-list-text">Pages</span>
                            </a>
                            <div class="inblock section-number"></div>
                        </li>
                        <li class="section-list-item">
                            <a href="#" title="On This Day" class="section-item-a">
                                <span class="section-icon">
                                    <div class="inblock fb-icons-2 fb-icon-back-clock"></div>
                                </span>
                                <span class="section-list-text">On This Day</span>
                            </a>
                            <div class="inblock section-number">12</div>
                        </li>
                        <li class="section-list-item">
                            <a href="#" title="Insights" class="section-item-a">
                                <span class="section-icon">
                                    <div class="inblock fb-icons-2 fb-icons-4 fb-icon-insights"></div>
                                </span>
                                <span class="section-list-text">Insights</span>
                            </a>
                            <div class="inblock section-number"></div>
                        </li>
                        <li class="section-list-item">
                            <a href="#" title="Friend List" class="section-item-a">
                                <span class="section-icon">
                                    <div class="inblock fb-icons-2 fb-icon-friends"></div>
                                </span>
                                <span class="section-list-text">Friend List</span>
                            </a>
                            <div class="inblock section-number"></div>
                        </li>
                        <li class="section-list-item">
                            <a href="#" title="Pages Feed" class="section-item-a">
                                <span class="section-icon">
                                    <div class="inblock fb-icons-2 fb-icon-news-yellow"></div>
                                </span>
                                <span class="section-list-text">Pages Feed</span>
                            </a>
                            <div class="inblock section-number">20+</div>
                        </li>
                        <li class="section-list-item">
                            <a href="#" title="Manage Apps" class="section-item-a">
                                <span class="section-icon">
                                    <div class="inblock fb-icons-2 fb-icons-4 fb-icon-settings"></div>
                                </span>
                                <span class="section-list-text">Manage Apps</span>
                            </a>
                            <div class="inblock section-number"></div>
                        </li>
                        <li class="section-list-item">
                            <a href="#" title="Photos" class="section-item-a">
                                <span class="section-icon">
                                    <div class="inblock fb-icons-2 fb-icon-photo"></div>
                                </span>
                                <span class="section-list-text">Photos</span>
                            </a>
                            <div class="inblock section-number"></div>
                        </li>
                        <li class="section-list-item">
                            <a href="#" title="Games" class="section-item-a">
                                <span class="section-icon">
                                    <div class="inblock fb-icons-2 fb-icon-tetris"></div>
                                </span>
                                <span class="section-list-text">Games</span>
                            </a>
                            <div class="inblock section-number">2</div>
                        </li>
                        <li class="section-list-item">
                            <a href="#" title="Suggest Edits" class="section-item-a">
                                <span class="section-icon">
                                    <div class="inblock fb-icons-2 fb-icon-check-in"></div>
                                </span>
                                <span class="section-list-text">Suggest Edits</span>
                            </a>
                            <div class="inblock section-number"></div>
                        </li>
                        <li class="section-list-item">
                            <a href="#" title="Offers" class="section-item-a">
                                <span class="section-icon">
                                    <div class="inblock fb-icons-2 fb-icon-offer"></div>
                                </span>
                                <span class="section-list-text">Offers</span>
                            </a>
                            <div class="inblock section-number"></div>
                        </li>
                        <li class="section-list-item">
                            <a href="#" title="Live Video" class="section-item-a">
                                <span class="section-icon">
                                    <div class="inblock fb-icons-2 fb-icon-video"></div>
                                </span>
                                <span class="section-list-text">Live Video</span>
                            </a>
                            <div class="inblock section-number"></div>
                        </li>
                        <li class="section-list-item">
                            <a href="#" title="Translate Facebook" class="section-item-a">
                                <span class="section-icon">
                                    <img class="img" src="https://static.xx.fbcdn.net/rsrc.php/v3/yt/r/LIRP1qmch3b.png" 
                                        draggable="false" alt="" width="20" height="20" style="vertical-align: text-bottom;">
                                </span>
                                <span class="section-list-text">Translate Facebook</span>
                            </a>
                            <div class="inblock section-number"></div>
                            <div class="section-item-options-btn section-icon">
                                <a href="#options"><div class="fb-icons-2 fb-icon-options"></div></a>
                            </div>
                        </li>
                        <li class="section-list-item">
                            <a href="#" title="Weather" class="section-item-a">
                                <span class="section-icon">
                                    <div class="inblock fb-icons-2 fb-icon-weather"></div>
                                </span>
                                <span class="section-list-text">Weather</span>
                            </a>
                            <div class="inblock section-number"></div>
                        </li>
                        <li class="section-list-item">
                            <a href="#" title="Saved" class="section-item-a">
                                <span class="section-icon">
                                    <div class="inblock fb-icons-2 fb-icon-bookmark"></div>
                                </span>
                                <span class="section-list-text">Saved</span>
                            </a>
                            <div class="inblock section-number">2</div>
                        </li>
                        <li class="section-list-item">
                            <a href="#" title="Moves" class="section-item-a">
                                <span class="section-icon">
                                    <div class="inblock fb-icons-2 fb-icon-react"></div>
                                </span>
                                <span class="section-list-text">Moves</span>
                            </a>
                            <div class="section-item-options-btn section-icon">
                                <a href="#options"><div class="fb-icons-2 fb-icon-options"></div></a>
                            </div>
                        </li>
                        <li class="section-list-item">
                            <a href="#" title="Crisis Response" class="section-item-a">
                                <span class="section-icon">
                                    <div class="inblock fb-icons-2 fb-icon-crisis"></div>
                                </span>
                                <span class="section-list-text">Crisis Response</span>
                            </a>
                            <div class="inblock section-number"></div>
                        </li>
                        <li class="section-list-item">
                            <a href="#" title="Create a Frame" class="section-item-a">
                                <span class="section-icon">
                                    <div class="inblock fb-icons-2 fb-icon-frame-photo"></div>
                                </span>
                                <span class="section-list-text">Create a Frame</span>
                            </a>
                            <div class="inblock section-number"></div>
                        </li>
                        <li class="section-list-item">
                            <a href="#" title="Discover People" class="section-item-a">
                                <span class="section-icon">
                                    <div class="inblock fb-icons-2 fb-icon-people-photo"></div>
                                </span>
                                <span class="section-list-text">Discover People</span>
                            </a>
                            <div class="inblock section-number"></div>
                        </li>
                        <li class="section-list-item">
                            <a href="#" title="Buy and Sell Groups" class="section-item-a">
                                <span class="section-icon">
                                    <div class="inblock fb-icons-2 fb-icon-etiquette"></div>
                                </span>
                                <span class="section-list-text">Buy and Sell Groups</span>
                            </a>
                            <div class="inblock section-number"></div>
                        </li>
                        <li class="section-list-item">
                            <a href="#" title="Gaming Video" class="section-item-a">
                                <span class="section-icon">
                                    <div class="inblock fb-icons-2 fb-icon-joystick"></div>
                                </span>
                                <span class="section-list-text">Gaming Video</span>
                            </a>
                            <div class="inblock section-number"></div>
                        </li>
                        <li class="section-list-item">
                            <a href="#" title="Payment History" class="section-item-a">
                                <span class="section-icon">
                                    <div class="inblock fb-icons-2 fb-icon-back-dollar"></div>
                                </span>
                                <span class="section-list-text">Payment History</span>
                            </a>
                            <div class="inblock section-number"></div>
                        </li>
                        <li class="section-list-item">
                            <a href="#" title="Recent Ad Activity" class="section-item-a">
                                <span class="section-icon">
                                    <div class="inblock fb-icons-2 fb-icon-ad"></div>
                                </span>
                                <span class="section-list-text">Recent Ad Activity</span>
                            </a>
                            <div class="inblock section-number"></div>
                        </li>
                        <li class="section-list-item">
                            <a href="#" title="Recommendations" class="section-item-a">
                                <span class="section-icon">
                                    <div class="inblock fb-icons-2 fb-icon-reccomandations"></div>
                                </span>
                                <span class="section-list-text">Recommendations</span>
                            </a>
                            <div class="inblock section-number"></div>
                        </li>
                    </ul>
                    <ul class="section-list create-list">
                        <div class="section-title">Create</div>
                        <li class="create-item">
                            <a class="usual-a" href="#">Ad</a>
                        </li>
                        <span class="dot">.</span>
                        <li class="create-item">
                            <a class="usual-a" href="#">Page</a>
                        </li>
                        <span class="dot">.</span>
                        <li class="create-item">
                            <a class="usual-a" href="#">Group</a>
                        </li>
                        <span class="dot">.</span>
                        <li class="create-item">
                            <a class="usual-a" href="#">Event</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}