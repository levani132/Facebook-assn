function screenSize(){
    var w = window,
        e = document.documentElement,
        g = document.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight|| e.clientHeight|| g.clientHeight;
    return {x, y};
}

function screenWidth(){
    return screenSize().x;
}

function screenHeight(){
    return screenSize().y;
}

function $(selector){
    return document.querySelector(selector);
}

var sidebar = $('.left-panel');
var rightSide = $('.right-panel');
document.body.style.minHeight = (sidebar.clientHeight + 90) + "px";
var scrollTop = 0, oldScroll = 0;
var windowScroll = () => {
    var curScroll = document.scrollingElement.scrollTop;
    scrollTop += curScroll - oldScroll;
    scrollTop = Math.min(scrollTop, sidebar.clientHeight - screenHeight() + 90);
    scrollTop = Math.max(scrollTop, 0);
    oldScroll = curScroll;
    sidebar.style.marginTop = (-scrollTop) + "px";
    if(curScroll > Math.max(rightSide.clientHeight - screenHeight() + 50, 0)){
        rightSide.classList.add("fixed");
        if(rightSide.querySelector('div').clientHeight < screenHeight() - 54){
            rightSide.style.top = "54px";
        }else{
            rightSide.style.top = "unset";
        }
    }else{
        rightSide.classList.remove("fixed");
    }
}
window.onscroll = windowScroll;

var chatOpened = true;
if(document.body.clientWidth < document.querySelector('.main').clientWidth + 247){
    document.body.classList.remove('chat-active');
}else{
    if(chatOpened){
        document.body.classList.add('chat-active');
    }
}

window.onresize = () => {
    if(document.body.clientWidth < document.querySelector('.main').clientWidth + 247){
        document.body.classList.remove('chat-active');
    }else{
        if(chatOpened){
            document.body.classList.add('chat-active');
        }
    }
}




var sectionChatList = document.querySelector('.section-chat-list');
var chatSidebar = document.querySelector('.chat-sidebar-container');
var chatUsers = Object.assign([], usersDB);
renderChatUsers();


var chatSearchInput = $('.chat-search-input');
var hasInput = false;

function filterChatUsers(keyword){
    keyowrd = keyword.toLowerCase();
    if(keyword){
        chatSidebar.classList.add('has-search-input');
        sectionChatList.parentElement.style.position = "absolute";
        sectionChatList.parentElement.style.paddingRight = "12px";
        chatSidebar.parentElement.scrollTo(0, chatSidebar.parentElement.scrollHeight);
        var shownCounter = 2;
        chatUsers = usersDB.filter(user => {
            return (user.name.toLowerCase().indexOf(keyword) != -1 || 
                user.lastName.toLowerCase().indexOf(keyword) != -1 ||
                (user.name + " " + user.lastName).toLowerCase().indexOf(keyword) != -1) &&
               ((shownCounter++) * 40) < chatSidebar.clientHeight - 30;
        });
    }else{
        chatSidebar.classList.remove('has-search-input');
        sectionChatList.parentElement.style.position = "static";
        sectionChatList.parentElement.style.paddingRight = "0px";
        chatUsers = Object.assign([], usersDB);
    }
    chatUsers = chatUsers.filter(user => user.id != 0);
    renderChatUsers();
}
filterChatUsers('');

chatSearchInput.onchange = 
chatSearchInput.oninput = 
chatSearchInput.onpaste = (e) => {
    filterChatUsers(e.target.value);
}