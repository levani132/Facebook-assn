function chatUserView(user){
    return `
    <li class='section-chat-item ${user.isActive ? "online" : ""}' onclick="openChatWith(${user.id})">
        <a href='#' class='inblock'>
            <img class='chat-user-picture' src='${user.picture}' alt='User'>
            ${user.name} ${user.lastName}
            <div class='chat-user-active'>
                ${user.isActive ? "" : user.time}
                <span class='green-dot is-online'></span>
            </div>
        </a>
        <div class="user-mini-block">
            <div class="user-mini-left-side">
                <img class="user-mini-img" src="${user.picture}" alt="User">
            </div>
            <div class="user-mini-right-side">
                <a href="#" class="user-mini-name usual-a">${user.name} ${user.lastName}</a>
                <div class="friend-mini-section">
                    <div class="friend-mini-section-left">
                        <span class="fb-icons-11 fb-icon-send-friend"></span>
                    </div>
                    <div class="friend-mini-section-right">
                        Became friends with <a href="#" class="usual-a">Anuki Gabrichidze</a>
                    </div>
                </div>
                <div class="friend-mini-section">
                    <div class="friend-mini-section-left">
                        <span class="fb-icons-11 fb-icon-friends-2"></span>
                    </div>
                    <div class="friend-mini-section-right">
                        69 mutual friends including <a href="#" class="usual-a">Anuki Gabrichidze</a> and <a href="#" class="usual-a">Anuki Gabr...</a>
                    </div>
                </div>
            </div>
            <span class="user-mini-bridge"></span>
        </div>
    </li>
    `;
}

function ChatUsersView(users){
    var result = `<ul class="section-chat-list">`;
    users.forEach(user => result += chatUserView(user));
    result += `</ul>`
    return result;
}