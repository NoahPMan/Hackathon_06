const greetingContainer = document.getElementById("greeting-container");
const usernameForm = document.getElementById("usernameForm");
const greetingMessage = document.getElementById("greeting-message");

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = `; expires=${date.toUTCString()}`;
    }
    document.cookie = `${name}=${value}${expires}`;
}

function getCookie(name) {
    const cookieString = document.cookie;
    const pairs = cookieString.split("; ");
    for (const pair of pairs) {
        const [key, value] = pair.split("=");
        if (key === name) {
            return value;
        }
    }
    return null;
}

//check for cookie
const storedName = getCookie("username");

    if (storedName) {
        greetingMessage.textContent = `Welcome back, ${storedName}!`;
        greetingContainer.classList.remove("hidden");
        usernameForm.classList.add("hidden");
    } else {
        greetingContainer.classList.add("hidden");
        usernameForm.classList.remove("hidden");
    }