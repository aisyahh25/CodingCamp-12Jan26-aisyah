// ================= WELCOME MESSAGE =================
welcomeMessage();

function welcomeMessage() {
    let userResponse = prompt("What is your name?");
    if (!userResponse || userResponse.trim() === "") {
        userResponse = "Guest";
    }

    document.getElementById("welcome-speech").innerText =
        `Hello, ${userResponse}! Welcome to my portfolio website.`;
}

// ================= MESSAGE POPUP =================
const btnSend = document.getElementById('submitBtn');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const popUp = document.getElementById('popupResult');
const resultContent = document.getElementById('resultContent');
const closePopup = document.getElementById('closePopup');
const form = document.getElementById('messageForm');

btnSend.addEventListener('click', function () {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields!');
        return;
    }

    const time = new Date().toLocaleString();

    resultContent.innerHTML = `
        <b>Time:</b> ${time}<br>
        <b>Name:</b> ${name}<br>
        <b>Email:</b> ${email}<br>
        <b>Message:</b> ${message}
    `;

    popUp.classList.remove('hidden');
    form.reset();
});

closePopup.addEventListener('click', function () {
    popUp.classList.add('hidden');
});
