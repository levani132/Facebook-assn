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
    </li>
    `;
}

function ChatUsersView(users){
    var result = `<ul class="section-chat-list">`;
    users.forEach(user => result += chatUserView(user));
    result += `</ul>`
    return result;
}