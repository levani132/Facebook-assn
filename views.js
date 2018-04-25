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

function renderChatUsers(){
    sectionChatList.innerHTML = "";
    if(chatUsers.length){
        for(var i in chatUsers){
            var user = chatUsers[i];
            sectionChatList.innerHTML += userView(user.name, user.lastName, user.picture, user.isActive, user.time);
        }
        document.querySelector('.contacts-title').innerHTML = "CONTACTS";
    }else{
        document.querySelector('.contacts-title').innerHTML = "No results found";
    }
}