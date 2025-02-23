const existingEmails = [
    "user1@example.com",
    "user2@example.com",
    "user3@example.com",
    "user4@example.com",
    "user5@example.com"
];

function validateName(name) {
    if (!name.trim()) {
        document.getElementById("nameError").textContent = "Name is required";
        return false;
    }
    document.getElementById("nameError").textContent = "";
    return true;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("emailError").textContent = "Invalid email format";
        return false;
    }
    if (existingEmails.includes(email)) {
        document.getElementById("emailError").textContent = "Email already exists.";
        return false;
    }
    document.getElementById("emailError").textContent = "";
    return true;
}

function validatePhone(phone) {
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById("phoneError").textContent = "Phone number must be 10 digits";
        return false;
    }
    document.getElementById("phoneError").textContent = "";
    return true;
}

document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    
    const isNameValid = validateName(name);
    const isEmailValid = validateEmail(email);
    const isPhoneValid = validatePhone(phone);
    
    if (isNameValid && isEmailValid && isPhoneValid) {
        localStorage.setItem("userName", name);
        localStorage.setItem("userEmail", email);
        window.location.href = "welcome.html";
    }
});
