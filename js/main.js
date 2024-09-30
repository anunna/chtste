document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registerForm');
    const ageSelect = document.getElementById('age');

    // Populate age dropdown
    for (let i = 13; i <= 100; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        ageSelect.appendChild(option);
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const userData = Object.fromEntries(formData);

        // Store user data in localStorage
        localStorage.setItem('userData', JSON.stringify(userData));

        // Redirect to chat page
        window.location.href = 'chat.html';
    });
});
