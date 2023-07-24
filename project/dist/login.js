"use strict";
let credenzialiList = [
    { email: "user@user",
        password: "password" },
    { email: "gino@panino",
        password: "pasuord" }
];
function login() {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let isLoggedIn = false;
    credenzialiList.forEach(x => {
        if (email.value === x.email && password.value === x.password) {
            window.location.href = "../pages/home.html";
            isLoggedIn = true;
        }
    });
    if (email.value === "admin@admin" && password.value === "password") {
        window.location.href = "../pages/admin.html";
        isLoggedIn = true;
    }
    if (!isLoggedIn) {
        alert("EMAIL E/O PASSWORD ERRATI");
    }
}
function register() {
    let newEmail = document.getElementById("email");
    let newPassword = document.getElementById("password");
    let isRegistered = false;
    credenzialiList.forEach(x => {
        if (newEmail.value === x.email) {
            alert("Utente già registrato");
            isRegistered = true;
        }
    });
    if (!isRegistered) {
        let newUser = {
            email: newEmail.value,
            password: newPassword.value
        };
        credenzialiList.push(newUser);
        alert("Utente registrato");
    }
}
