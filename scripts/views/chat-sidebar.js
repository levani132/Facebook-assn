function chatSidebarView(){
    return `
        <div class="chat-sidebar">
            <div class="no-scrollbar">
                <div class="chat-sidebar-container">
                    <div class="chat-contacts-section">
                        <div class="section-title contacts-title">CONTACTS</div>
                        ${ChatUsersView(usersDB.filter(user => user != loggedUser))}
                    </div>
                    <div class="chat-sidebar-footer">
                        <div class="chat-search-icon">
                            <span class="fb-icons-10 fb-icon-search-2"></span>
                        </div>
                        <input autocomplete="off" class="chat-search-input" placeholder="Search" />
                        <div class="chat-sidebar-footer-right">
                            <div class="chat-footer-icon">
                                <span class="fb-icons-10 fb-icon-chat-setting"></span>
                            </div>
                            <div class="chat-footer-icon">
                                <span class="fb-icons-10 fb-icon-pen-2"></span>
                            </div>
                            <div class="chat-footer-icon">
                                <span class="fb-icons-10 fb-icon-add-friend"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}