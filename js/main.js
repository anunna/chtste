document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registerForm');
    const ageSelect = document.getElementById('age');
    const heightSelect = document.getElementById('height');
    const weightSelect = document.getElementById('weight');

    // Populate age dropdown
    for (let i = 13; i <= 100; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        ageSelect.appendChild(option);
    }

    // Function to convert cm to feet and inches
    function cmToFeetInches(cm) {
        const inches = cm / 2.54;
        const feet = Math.floor(inches / 12);
        const remainingInches = Math.round(inches % 12);
        return `${feet}'${remainingInches}"`;
    }

    // Populate height dropdown
    for (let cm = 140; cm <= 213; cm++) {
        const option = document.createElement('option');
        option.value = cm;
        option.textContent = `${cm} cm (${cmToFeetInches(cm)})`;
        heightSelect.appendChild(option);
    }

    // Function to convert kg to lbs
    function kgToLbs(kg) {
        return Math.round(kg * 2.20462);
    }

    // Populate weight dropdown
    for (let kg = 35; kg <= 250; kg++) {
        const option = document.createElement('option');
        option.value = kg;
        option.textContent = `${kg} kg (${kgToLbs(kg)} lbs)`;
        weightSelect.appendChild(option);
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

