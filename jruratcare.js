// Function to switch forms
function showForm(formId, btn) {
    const forms = document.querySelectorAll(".form-box");
    const buttons = document.querySelectorAll(".tabs button");

    // Hide all forms
    forms.forEach(form => {
        form.style.display = "none";
    });

    // Remove active class from all buttons
    buttons.forEach(button => {
        button.classList.remove("active");
    });

    // Show selected form
    document.getElementById(formId).style.display = "flex";

    // Highlight clicked button
    btn.classList.add("active");
}


// Run after page loads
document.addEventListener("DOMContentLoaded", function () {

    // Show default form (Patient)
    const defaultBtn = document.querySelector(".tabs button");
    showForm("patient", defaultBtn);

    // Handle form submissions
    const forms = document.querySelectorAll(".form-box");

    forms.forEach(form => {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("✅ Form submitted successfully!");
            form.reset();
        });
    });

});


// chatbot

function toggleChat() {
    const bot = document.getElementById("chatbot");

    if (bot.style.display === "flex") {
        bot.style.display = "none";
    } else {
        bot.style.display = "flex";
    }
}

function sendMessage() {
    const input = document.getElementById("chatInput");
    const chatBody = document.getElementById("chatBody");

    const text = input.value.trim();
    if (text === "") return;

    // User message
    const userMsg = document.createElement("div");
    userMsg.className = "user-message";
    userMsg.innerText = text;
    chatBody.appendChild(userMsg);

    let reply = "Sorry, I didn't understand that.";

    const msg = text.toLowerCase();

    if (msg.includes("oxygen")) {
        reply = "We provide oxygen support at home. Please fill the patient form.";
    } 
    else if (msg.includes("bed")) {
        reply = "Hospital beds depend on availability. Submit a request form.";
    } 
    else if (msg.includes("volunteer")) {
        reply = "You can join as a volunteer using the volunteer form.";
    } 
    else if (msg.includes("contact")) {
        reply = "Please use the contact form to reach our team.";
    }
    else if (msg.includes("blood donate")) {
        reply = "you can donate your blood .Please fill the petient form";
    }

    // Bot typing delay 
    setTimeout(() => {
        const botMsg = document.createElement("div");
        botMsg.className = "bot-message";
        botMsg.innerText = reply;
        chatBody.appendChild(botMsg);

        chatBody.scrollTop = chatBody.scrollHeight;
    }, 500);

    input.value = "";
}

// Enter key support
document.getElementById("chatInput")
.addEventListener("keypress", function(e) {
    if (e.key === "Enter") sendMessage();
});
