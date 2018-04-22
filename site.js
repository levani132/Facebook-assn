var w, d, e, g, x, y;
function updateScrenSize(){
    w = window;
    d = document;
    e = d.documentElement;
    g = d.getElementsByTagName('body')[0];
    x = w.innerWidth || e.clientWidth || g.clientWidth;
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
}
updateScrenSize();

var sidebar = document.querySelector('.left-panel');
var sidebarHeight = sidebar.clientHeight;
document.body.style.minHeight = (sidebarHeight + 90) + "px";
var scrollTop = 0;
var oldScroll = 0;
window.onscroll = () => {
    var curScroll = document.scrollingElement.scrollTop;
    scrollTop += curScroll - oldScroll;
    scrollTop = Math.min(scrollTop, sidebarHeight - y + 90);
    scrollTop = Math.max(scrollTop, 0);
    oldScroll = curScroll;
    sidebar.style.marginTop = (-scrollTop) + "px";
}

window.onresize = updateScrenSize;