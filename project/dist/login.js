"use strict";
function login() {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    console.log("ciao");
    if (email.value === "admin@admin" && password.value === "password") {
        window.location.href = "../pages/admin.html";
    }
    else if (email.value === "user@user" && password.value === "password") {
        window.location.href = "../pages/home.html";
    }
    else {
        alert("EMAIL E/O PASSWORD ERRATI");
    }
}
