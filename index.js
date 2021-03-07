let loginbutton = document.getElementsByClassName("login-button")[0];
let signinbutton = document.getElementsByClassName("login-signup")[0];
let signoutbutton = document.getElementsByClassName("signout-button")[0];
window.localStorage.setItem("loggedIn", false)
signinbutton.addEventListener("click", function (event) {
    let username = document.getElementsByName("username")[0].value;
    let password = document.getElementsByName("password")[0].value;
    console.log(username, password);
    if (username == "" || password == "") {
        alert("Please type your username or password to sign up !!!");
        window.localStorage.setItem("loggedIn", false);
        document.getElementById("login-failed").style.display = "block";
        document.getElementById("login-failed").innerHTML = "SignUp Failed";
    } else if (username == "admin" || username == "Admin" || password == "admin" || password == "Admin") {
        alert("You can't use that username !!!")
        window.localStorage.setItem("loggedIn", false);
        document.getElementById("login-failed").style.display = "block";
        document.getElementById("login-failed").innerHTML = "SignUp Failed";
    } else if (username == window.localStorage.getItem("username")) {
        window.localStorage.setItem("loggedIn", false);
        alert("The username have been used !!!");
        document.getElementById("login-failed").style.display = "block";
        document.getElementById("login-failed").innerHTML = "SignUp Failed";
    } else {
        document.getElementById("login-failed").style.display = "block";
        document.getElementById("login-failed").innerHTML = "Signup Success";
        document.getElementById("login-failed").style.color = "green";
        window.localStorage.setItem("username", username);
        window.localStorage.setItem("password", password);
        location.reload();
    }
})

loginbutton.addEventListener("click", function (event) {
    let username = document.getElementsByName("username")[0].value;
    let password = document.getElementsByName("password")[0].value;
    if (username == "admin" || username == "Admin" || password == "admin" || password == "Admin") {
        alert("You can't use that username !!!")
        window.localStorage.setItem("loggedIn", false);
        document.getElementById("login-failed").style.display = "block";
    } else if (username == "" || password == "") {
        alert("Please type your username or password !!!");
        window.localStorage.setItem("loggedIn", false);
        document.getElementById("login-failed").style.display = "block";
    }
    if (window.localStorage.getItem("loggedIn") == "true") {
        let signedIn = document.getElementsByClassName("signed-in")[0];
        console.log(signedIn);
        document.getElementsByClassName("sign-in")[0].style.display = "none"
        document.getElementsByClassName("signed-in")[0].style.display = "inline-block"
    } else
        if (username == window.localStorage.getItem("username") && password == window.localStorage.getItem("password")) {
            window.localStorage.setItem("loggedIn", true);
            alert(`Welcome back ${username} !`);
            document.getElementById("login-failed").style.display = "block";
            document.getElementById("login-failed").innerHTML = "Login Success";
            document.getElementById("login-failed").style.color = "green";
        }
        else {
            alert("Wrong username or password !!!");
            window.localStorage.setItem("loggedIn", false);
            document.getElementById("login-failed").style.display = "block";
        }
})

signoutbutton.addEventListener("click", function (event) {
    window.localStorage.setItem("loggedIn", false);
    document.getElementsByClassName("sign-in")[0].style.display = "inline-block";
    document.getElementsByClassName("signed-in")[0].style.display = "none";
    document.getElementsByName("password")[0].value = "";
    document.getElementsByName("username")[0].value = "";
})
let airpollution__causes = document.getElementById("airpollution-causes")
let airpollution__affect = document.getElementById("airpollution-affect")
let airpollution__result = document.getElementById("airpollution-result")
let airpollution__solution = document.getElementById("airpollution-solution")
let airpollution__video = document.getElementById("body-airpollution-content__video")
let apcauses__video = document.getElementById("ap-causes__video")
let videoAp = document.getElementById("video-ap");

airpollution__causes.addEventListener("click", function (event) {
    airpollution__causes.style.backgroundColor = "black";
    airpollution__causes.style.color = "white";
    airpollution__causes.style.width = "100%";
    airpollution__affect.style.backgroundColor = "white";
    airpollution__affect.style.color = "black";
    airpollution__solution.style.color = "black";
    airpollution__solution.style.backgroundColor = "white";
    airpollution__result.style.backgroundColor = "white";
    airpollution__result.style.color = "black";
    apcauses__video.style.display = "block";
    videoAp.style.display = "none";
})
airpollution__affect.addEventListener("click", function (event) {
    airpollution__affect.style.backgroundColor = "black";
    airpollution__affect.style.color = "white";
    airpollution__affect.style.width = "100%";
    airpollution__causes.style.backgroundColor = "white";
    airpollution__causes.style.color = "black";
    airpollution__result.style.backgroundColor = "white";
    airpollution__result.style.color = "black";
    airpollution__solution.style.color = "black";
    airpollution__solution.style.backgroundColor = "white";
    videoAp.src = "https://www.youtube.com/embed/e6rglsLy1Ys";
    apcauses__video.style.display = "none";
    videoAp.style.display = "block";
    apcauses__video.pause();
})
airpollution__result.addEventListener("click", function (event) {
    airpollution__result.style.backgroundColor = "black";
    airpollution__result.style.color = "white";
    airpollution__result.style.width = "100%";
    airpollution__affect.style.backgroundColor = "white";
    airpollution__affect.style.color = "black";
    airpollution__solution.style.color = "black";
    airpollution__solution.style.backgroundColor = "white";
    airpollution__causes.style.backgroundColor = "white";
    airpollution__causes.style.color = "black";
    videoAp.src = "https://www.youtube.com/embed/UhVkxIWVxPc";
    apcauses__video.style.display = "none";
    videoAp.style.display = "block";
    apcauses__video.pause();
})
airpollution__solution.addEventListener("click", function (event) {
    airpollution__solution.style.backgroundColor = "black";
    airpollution__solution.style.color = "white";
    airpollution__solution.style.width = "100%";
    airpollution__affect.style.backgroundColor = "white";
    airpollution__affect.style.color = "black";
    airpollution__causes.style.backgroundColor = "white";
    airpollution__causes.style.color = "black";
    airpollution__result.style.backgroundColor = "white";
    airpollution__result.style.color = "black";
    videoAp.src = "https://www.youtube.com/embed/yCU68dMOdHo";
    apcauses__video.style.display = "none";
    videoAp.style.display = "block";
    apcauses__video.pause();
})
