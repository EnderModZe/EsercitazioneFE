
function login(){
    let email = document.getElementById("email") as HTMLInputElement;
    let password = document.getElementById("password") as HTMLInputElement;
    console.log("ciao")
    if(email.value === "admin@admin" && password.value === "password"){
        window.location.href = "../pages/home.html"
    }else{
        alert("EMAIL E/O PASSWORD ERRATI") 
    }
}

