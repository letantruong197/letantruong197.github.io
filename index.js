let loginbutton = document.getElementsByClassName("login-button")[0];
let signinbutton = document.getElementsByClassName("login-signup")[0];
let signoutbutton = document.getElementsByClassName("signout-button")[0];
let profilename = document.getElementById("profile-name");
let signedIn = document.getElementsByClassName("signed-in")[0];
let namepf = window.localStorage.getItem("username");
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
    }else
    if (window.localStorage.getItem("loggedIn") == "true") {
        console.log(signedIn);
        document.getElementsByClassName("sign-in")[0].style.display = "none";
        signedIn.style.display = "inline-block";
    }
        if (username == window.localStorage.getItem("username") && password == window.localStorage.getItem("password")) {
            window.localStorage.setItem("loggedIn", true);
            alert(`Welcome back ${username} !`);
            document.getElementById("login-failed").style.display = "block";
            document.getElementById("login-failed").innerHTML = "Login Success";
            document.getElementById("login-failed").style.color = "green";
            location.reload()
        }
        else if (username == "" || password == "") {
            alert("Please type your username or password !!!");
            window.localStorage.setItem("loggedIn", false);
            document.getElementById("login-failed").style.display = "block";
        } else {
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
if(window.localStorage.getItem("loggedIn") == "true"){
    profilename.innerHTML = namepf
}
if (window.localStorage.getItem("loggedIn") == "true") {
    console.log(signedIn);
    document.getElementsByClassName("sign-in")[0].style.display = "none";
    signedIn.style.display = "inline-block";
}
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
    airpollution__affect.style.backgroundColor = "transparent";
    airpollution__affect.style.color = "black";
    airpollution__solution.style.color = "black";
    airpollution__solution.style.backgroundColor = "transparent";
    airpollution__result.style.backgroundColor = "transparent";
    airpollution__result.style.color = "black";
    apcauses__video.style.display = "block";
    videoAp.style.display = "none";
})
airpollution__affect.addEventListener("click", function (event) {
    airpollution__affect.style.backgroundColor = "black";
    airpollution__affect.style.color = "white";
    airpollution__affect.style.width = "100%";
    airpollution__causes.style.backgroundColor = "transparent";
    airpollution__causes.style.color = "black";
    airpollution__result.style.backgroundColor = "transparent";
    airpollution__result.style.color = "black";
    airpollution__solution.style.color = "black";
    airpollution__solution.style.backgroundColor = "transparent";
    videoAp.src = "https://www.youtube.com/embed/e6rglsLy1Ys";
    apcauses__video.style.display = "none";
    videoAp.style.display = "block";
    apcauses__video.pause();
})
airpollution__result.addEventListener("click", function (event) {
    airpollution__result.style.backgroundColor = "black";
    airpollution__result.style.color = "white";
    airpollution__result.style.width = "100%";
    airpollution__affect.style.backgroundColor = "transparent";
    airpollution__affect.style.color = "black";
    airpollution__solution.style.color = "black";
    airpollution__solution.style.backgroundColor = "transparent";
    airpollution__causes.style.backgroundColor = "transparent";
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
    airpollution__affect.style.backgroundColor = "transparent";
    airpollution__affect.style.color = "black";
    airpollution__causes.style.backgroundColor = "transparent";
    airpollution__causes.style.color = "black";
    airpollution__result.style.backgroundColor = "transparent";
    airpollution__result.style.color = "black";
    videoAp.src = "https://www.youtube.com/embed/yCU68dMOdHo";
    apcauses__video.style.display = "none";
    videoAp.style.display = "block";
    apcauses__video.pause();
})

let climatechange__causes = document.getElementById("climatechange-causes")
let climatechange__affect = document.getElementById("climatechange-affect")
let climatechange__result = document.getElementById("climatechange-result")
let climatechange__solution = document.getElementById("climatechange-solution")
let climatechange__video = document.getElementById("body-content-climatechange-content__video")
let videocm = document.getElementById("video-cm");
climatechange__causes.addEventListener("click", function (event) {
    climatechange__causes.style.backgroundColor = "white";
    climatechange__causes.style.color = "black";
    climatechange__causes.style.width = "100%";
    climatechange__affect.style.backgroundColor = "transparent";
    climatechange__affect.style.color = "white";
    climatechange__solution.style.color = "white";
    climatechange__solution.style.backgroundColor = "transparent";
    climatechange__result.style.backgroundColor = "transparent";
    videocm.src = "https://www.youtube.com/embed/G4H1N_yXBiA";
    climatechange__result.style.color = "white";
    videocm.style.display = "block";
})
climatechange__affect.addEventListener("click", function (event) {
    climatechange__affect.style.backgroundColor = "white";
    climatechange__affect.style.color = "black";
    climatechange__affect.style.width = "100%";
    climatechange__causes.style.backgroundColor = "transparent";
    climatechange__causes.style.color = "white";
    climatechange__result.style.backgroundColor = "transparent";
    climatechange__result.style.color = "white";
    climatechange__solution.style.color = "white";
    climatechange__solution.style.backgroundColor = "transparent";
    videocm.src = "https://www.youtube.com/embed/JywsWktvODc";
    videocm.style.display = "block";
    apcauses__video.pause();
})
climatechange__result.addEventListener("click", function (event) {
    climatechange__result.style.backgroundColor = "white";
    climatechange__result.style.color = "black";
    climatechange__result.style.width = "100%";
    climatechange__affect.style.backgroundColor = "transparent";
    climatechange__affect.style.color = "white";
    climatechange__solution.style.color = "white";
    climatechange__solution.style.backgroundColor = "transparent";
    climatechange__causes.style.backgroundColor = "transparent";
    climatechange__causes.style.color = "white";
    videocm.src = "https://www.youtube.com/embed/DhhVr5iLF-c";
    videocm.style.display = "block";
    apcauses__video.pause();
})
climatechange__solution.addEventListener("click", function (event) {
    climatechange__solution.style.backgroundColor = "white";
    climatechange__solution.style.color = "black";
    climatechange__solution.style.width = "100%";
    climatechange__affect.style.backgroundColor = "transparent";
    climatechange__affect.style.color = "white";
    climatechange__causes.style.backgroundColor = "transparent";
    climatechange__causes.style.color = "white";
    climatechange__result.style.backgroundColor = "transparent";
    climatechange__result.style.color = "black";
    videocm.src = "https://www.youtube.com/embed/gSXOxrjCA40";
    videocm.style.display = "block";
    apcauses__video.pause();
})
