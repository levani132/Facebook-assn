function userView(name, lastName, picture, isActive, time){
    return `\
    <li class='section-chat-item ${isActive ? "online" : ""}'>\
        <a href='#' class='inblock'>\
            <img class='chat-user-picture' src='${picture}' alt='User'>\
            ${name} ${lastName}\
            <div class='chat-user-active'>\
                ${isActive ? "" : time}
                <span class='green-dot is-online'></span>\
            </div>\
        </a>\
    </li>\
    `;
}