function mainView(){
    return `
        <main class="main clearfix" tabindex="-1">
            ${leftPanelView()}
            <div class="main-panel">
                <div class="middle-panel">
                    ${newPostView()}
                    ${postsView(postsDB)}
                </div>
                ${rightPanelView()}
            </div>
        </main>
    `;
}