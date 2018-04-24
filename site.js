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

var sidebar = document.querySelector('.left-panel');
document.body.style.minHeight = (sidebar.clientHeight + 90) + "px";
var scrollTop = 0, oldScroll = 0;
window.onscroll = () => {
    var curScroll = document.scrollingElement.scrollTop;
    scrollTop += curScroll - oldScroll;
    scrollTop = Math.min(scrollTop, sidebar.clientHeight - screenHeight() + 90);
    scrollTop = Math.max(scrollTop, 0);
    oldScroll = curScroll;
    sidebar.style.marginTop = (-scrollTop) + "px";
}