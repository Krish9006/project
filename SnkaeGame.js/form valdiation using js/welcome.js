const userName = localStorage.getItem("userName");
const userEmail = localStorage.getItem("userEmail");

if (userName && userEmail) {
    document.getElementById("userName").textContent = userName;
    document.getElementById("userEmail").textContent = userEmail;
} else {
    window.location.href = "index.html";
}

function logout() {
    localStorage.clear();
    window.location.href = "index.html";
}
