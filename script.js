const welcomeBtn = document.getElementById("welcomeBtn");
const message = document.getElementById("message");

welcomeBtn.addEventListener("click", function () {
    message.textContent =
        "Welcome! You just made your first interactive website.";
});