document.addEventListener('DOMContentLoaded', () => {
    const userList = document.getElementById('userList');
    const chatList = document.getElementById('chatList');

    // Get user data from localStorage
    const userData = JSON.parse(localStorage.getItem('userData'));

    // Simulate online users
    const onlineUsers = [
        { username: 'User1', age: 25, country: 'USA', gender: 'Male' },
        { username: 'User2', age: 30, country: 'Canada', gender: 'Female' },
        { username: 'User3', age: 28, country: 'UK', gender: 'Male' },
    ];

    // Populate user list
    onlineUsers.forEach(user => {
        const li = document.createElement('li');
        li.textContent = `${user.username}, ${user.age}, ${user.country}, ${user.gender}`;
        li.addEventListener('click', () => createChatWindow(user));
        userList.appendChild(li);
    });

    function createChatWindow(user) {
        const chatWindow = document.createElement('div');
        chatWindow.className = 'chat-window';

        const header = document.createElement('div');
        header.className = 'header';
        header.innerHTML = `
            <span>${user.username}</span>
            <span class="status">Online</span>
        `;

        const messages = document.createElement('div');
        messages.className = 'messages';

        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Type a message...';
        input.className = 'message-input';

        chatWindow.appendChild(header);
        chatWindow.appendChild(messages);
        chatWindow.appendChild(input);

        chatList.appendChild(chatWindow);

        // Handle message sending
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const message = input.value.trim();
                if (message) {
                    const messageElement = document.createElement('div');
                    messageElement.textContent = `${userData.displayName}: ${message}`;
                    messages.appendChild(messageElement);
                    input.value = '';
                }
            }
        });
    }
});
