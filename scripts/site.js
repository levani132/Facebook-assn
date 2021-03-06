loggedUser = usersService.getUser(Math.floor(Math.random() * usersDB.length));
$("app").innerHTML = applicationView();
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
function windowScroll() {
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
var chatUsers = Object.assign([], usersService.getAllUsers());
function renderChatUsers(){
    var chatUsersView = ChatUsersView(chatUsers);
    if(!chatUsers.length){
        document.querySelector('.contacts-title').innerHTML = "No results found";
    }else{
        document.querySelector('.contacts-title').innerHTML = "CONTACTS";
    }
    sectionChatList = $('.section-chat-list');
    var chat = sectionChatList.parentElement;
    chat.removeChild(sectionChatList);
    chat.innerHTML += chatUsersView;
    sectionChatList = chat.querySelector('.section-chat-list');
}
renderChatUsers();


var chatSearchInput = $('.chat-search-input');
var hasInput = false;

function updateChatUsers(keyword){
    var shownCounter = 2;
    chatUsers = usersService.getAllUsers().filter(user => {
        return (user.name.toLowerCase().indexOf(keyword) != -1 || 
            user.lastName.toLowerCase().indexOf(keyword) != -1 ||
            (user.name + " " + user.lastName).toLowerCase().indexOf(keyword) != -1) &&
            (keyword == "" || ((shownCounter++) * 40) < $('.chat-sidebar').clientHeight - 70);
    });
    if(keyword == "")
        chatUsers = chatUsers.filter(user => user.id != loggedUser.id);
    renderChatUsers();

}

function updateChatView(keyword){
    if(keyword){
        chatSidebar.classList.add('has-search-input');
        chatSidebar.parentElement.scrollTo(0, chatSidebar.parentElement.scrollHeight);
    }else{
        chatSidebar.classList.remove('has-search-input');
    }
}

function filterChatUsers(keyword){
    keyword = keyword.toLowerCase();
    updateChatUsers(keyword);
    updateChatView(keyword);
}

chatSearchInput.onchange = 
chatSearchInput.oninput = 
chatSearchInput.onpaste = (e) => {
    filterChatUsers(e.target.value);
}

function addNewPost(e){
    e.preventDefault();
    var newPost = {
        id: 0,
        creator: loggedUser,
        action: "",
        time: new Date(),
        body: new FormData(e.target).get('new-post'),
        likers: [],
        comments: [],
        isNew: true
    };
    postsService.addPost(newPost);
    $('.feed').innerHTML = postView(newPost) + $('.feed').innerHTML;
    e.target.reset();
    document.querySelector('main').focus();
}

function addNewComment(postId, e){
    e.preventDefault();
    var newComment = {
        id: 0,
        postId,
        creator: loggedUser,
        body: new FormData(e.target).get('new-comment'),
        time: new Date(),
        likers: [],
        replies: [],
        isNew: true
    }
    commentsService.addComment(newComment);
    $(`#post-${postId} .post-comments`).innerHTML += commentView(newComment);
    e.target.reset();
}

function addNewReply(commentId, e){
    e.preventDefault();
    var newReply = {
        id: 0,
        commentId,
        creator: loggedUser,
        body: new FormData(e.target).get('new-comment'),
        time: new Date(),
        likers: [],
        isNew: true
    }
    repliesService.addReply(newReply);
    $(`#comment-${commentId} .replies`).innerHTML += replyView(newReply);
    e.target.reset();
}

function openReplies(commentId, e){
    e.preventDefault();
    $(`#comment-${commentId} .replies-wrapper`).classList.remove('hidden');
    $(`#comment-${commentId} .post-new-comment`).classList.remove('hidden');
    $(`#comment-${commentId} .more-replies`).classList.add('hidden');
    $(`#comment-${commentId} .post-new-comment input`).focus();
}

function likePost(postId){
    var post = getPost(postId);
    if(post.likers.find(user => user.id == loggedUser.id) != null){
        post.likers = post.likers.filter(liker => liker.id != loggedUser.id);
        $(`#post-${postId} .post-reactions-text`).innerHTML = likersToString(post.likers);
        $(`#post-${postId} .like`).classList.remove('liked');
    }else{
        post.likers.push(loggedUser);
        $(`#post-${postId} .post-reactions-text`).innerHTML = likersToString(post.likers);
        $(`#post-${postId} .like`).classList.add('liking');
        $(`#post-${postId} .like`).classList.add('liked');
        setTimeout(() => $(`#post-${postId} .like`).classList.remove('liking'), 350);
    }
    if(post.likers.length){
        $(`#post-${postId} .post-likes`).classList.remove('hidden');
    }else{
        $(`#post-${postId} .post-likes`).classList.add('hidden');
    }
    save('posts');
}