// Call the welcome function when the script loads 
welcomeMessage();

function welcomeMessage() {
    // Prompt the user for their name
    let userResponse = prompt("What is your name:");

    // If userResponse is null or empty, set a default name
    if (userResponse === null || userResponse.trim() === "") {
        userResponse = "Guest";
    }

    // Display the welcome message with the user's name
    document.getElementById("welcome-speech").innerText = 
    `Hello, ${userResponse}! Welcome to Our Company Website.`;
}

// Message Us Pop-up
const btnSend = document.querySelector('#submit-button');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const popUp = document.getElementById('popupResult');
const resultContent = document.getElementById('resultMessage');
const closePopup = document.getElementById('closePopup');

btnSend.addEventListener('click', function(event) {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields before submitting the form.');
        return;
    }

    const now = new Date();
    const time = now.toString();

    //Isi pop up
    resultContent.innerHTML = `
        <b>Current Time:</b> ${time} <br>
        <b>Name:</b> ${name} <br>
        <b>Email:</b> ${email} <br>
        <b>Message:</b> ${message} <br>
    `;
    
    popUp.classList.remove('hidden');

    //Reset form
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
});

    //Tutup pop up
    closePopup.addEventListener('click', function() {
    popUp.classList.add('hidden');
    });