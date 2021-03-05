let loginbutton = document.getElementsByClassName("login-button")[0];
let signinbutton = document.getElementsByClassName("login-signup")[0];
let signoutbutton = document.getElementsByClassName("signout-button")[0];

signinbutton.addEventListener("click", function (event) {
    let username = document.getElementsByName("username")[0].value;
    let password = document.getElementsByName("password")[0].value;
    console.log(username, password);
    window.localStorage.setItem("username", username);
    window.localStorage.setItem("password", password);
})

loginbutton.addEventListener("click", function (event) {
    let username = document.getElementsByName("username")[0].value;
    let password = document.getElementsByName("password")[0].value;
    if (username == window.localStorage.getItem("username") && password == window.localStorage.getItem("password")) {
        window.localStorage.setItem("loggedIn", true);
        alert(`Welcome back ${username} !`)
    } else {
        window.localStorage.setItem("loggedIn", false)
    }
    if (window.localStorage.getItem("loggedIn") == "true") {
        let signedIn = document.getElementsByClassName("signed-in")[0];
        console.log(signedIn);
        document.getElementsByClassName("sign-in")[0].style.display = "none"
        document.getElementsByClassName("signed-in")[0].style.display = "inline-block"
    }
})

signoutbutton.addEventListener("click", function (event) {
    window.localStorage.setItem("loggedIn", false);
    document.getElementsByClassName("sign-in")[0].style.display = "inline-block";
    document.getElementsByClassName("signed-in")[0].style.display = "none";
    document.getElementsByName("password")[0].value = "";
    document.getElementsByName("username")[0].value = "";
})