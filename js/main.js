document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registerForm');
    const ageSelect = document.getElementById('age');
    const heightSelect = document.getElementById('height');
    const weightSelect = document.getElementById('weight');
    const registerButton = document.getElementById('register-button');
    const captchaContainer = document.getElementById('captcha-question');
    const captchaAnswer = document.getElementById('captcha-answer');

    let correctCaptchaAnswer = 0;

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

   // Function to generate a random math question
    function generateCaptcha() {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        correctCaptchaAnswer = num1 + num2;
        captchaQuestion.textContent = `${num1} + ${num2} = `;
    }

    // Show CAPTCHA when the register button is clicked
    registerButton.addEventListener('click', (e) => {
        e.preventDefault();
        captchaContainer.style.display = 'block';
        generateCaptcha();
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Verify CAPTCHA
        const userAnswer = parseInt(captchaAnswer.value, 10);
        if (userAnswer !== correctCaptchaAnswer) {
            alert('Incorrect CAPTCHA answer. Please try again.');
            generateCaptcha();
            captchaAnswer.value = '';
            return;
        }

        const formData = new FormData(form);
        const userData = Object.fromEntries(formData);

        // Store user data in localStorage
        localStorage.setItem('userData', JSON.stringify(userData));

        // Redirect to chat page
        window.location.href = 'chat.html';
    });
});

