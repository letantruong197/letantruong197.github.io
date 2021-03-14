let loginbutton = document.getElementsByClassName("login-button")[0];
let signupbutton = document.getElementsByClassName("login-signup")[0];
let signoutbutton = document.getElementsByClassName("signout-button")[0];
let profilename = document.getElementById("profile-name");
let signedIn = document.getElementsByClassName("signed-in")[0];
let namepf = window.localStorage.getItem("username");
if (window.localStorage.getItem("users") === null) {
    window.localStorage.setItem("users", JSON.stringify([]));
}
let users = JSON.parse(window.localStorage.getItem("users"))
signupbutton.addEventListener("click", function (event) {
    let userObj = {}
    let username = document.getElementsByName("username")[0].value;
    let password = document.getElementsByName("password")[0].value;
    let hadUsers = users.find(o => o.name === username);
    console.log(username, password);
    if (username == "" || password == "") {
        alert("Please type your username or password to sign up !!!");
        window.localStorage.setItem("loggedIn", false);
        document.getElementById("login-failed").style.display = "block";
        document.getElementById("login-failed").innerHTML = "SignUp Failed";
        document.getElementsByClassName("body-content-discussion")[0].style.display = "none"
    } else if (username.toLowerCase() == "admin" || password.toLowerCase() == "admin") {
        alert("You can't use that username or password !!!")
        window.localStorage.setItem("loggedIn", false);
        document.getElementById("login-failed").style.display = "block";
        document.getElementById("login-failed").innerHTML = "SignUp Failed";
        document.getElementsByClassName("body-content-discussion")[0].style.display = "none"
    } else if (hadUsers !== undefined && username == hadUsers.name) {
        window.localStorage.setItem("loggedIn", false);
        alert("The username have been used !!!");
        document.getElementById("login-failed").style.display = "block";
        document.getElementById("login-failed").innerHTML = "SignUp Failed";
        document.getElementsByClassName("body-content-discussion")[0].style.display = "none"
        location.reload();
    } else {
        userObj.name = username
        userObj.password = password
        users.push(userObj)
        document.getElementById("login-failed").style.display = "block";
        document.getElementById("login-failed").innerHTML = "Signup Success";
        document.getElementById("login-failed").style.color = "green";
        window.localStorage.setItem("users", JSON.stringify(users));
        document.getElementsByClassName("body-content-discussion")[0].style.display = "block"
        location.reload();
    }

})
loginbutton.addEventListener("click", function (event) {
    let username = document.getElementsByName("username")[0].value;
    let password = document.getElementsByName("password")[0].value;
    let hadUsers = users.find(o => o.name === username);
    console.log(hadUsers)
    if (username.toLowerCase() == "admin" || password.toLowerCase() == "admin") {
        alert("You can't use that username !!!")
        window.localStorage.setItem("loggedIn", false);
        document.getElementById("login-failed").style.display = "block";
    } else
        if (window.localStorage.getItem("loggedIn") == "true") {
            console.log(signedIn);
            document.getElementsByClassName("sign-in")[0].style.display = "none";
            signedIn.style.display = "inline-block";
        }
    if (hadUsers !== undefined &&username == hadUsers.name && password == hadUsers.password ) {
        window.localStorage.setItem("loggedIn", true);
        window.localStorage.setItem("currentUser", username);
        alert(`Welcome back ${username} !`);
        document.getElementById("login-failed").style.display = "block";
        document.getElementById("login-failed").innerHTML = "Login Success";
        document.getElementById("login-failed").style.color = "green";
        document.getElementsByClassName("body-content-discussion")[0].style.display = "block"
        location.reload()
    }
    else if (username == "" || password == "") {
        alert("Please type your username or password !!!");
        window.localStorage.setItem("loggedIn", false);
        document.getElementById("login-failed").style.display = "block";
        document.getElementsByClassName("body-content-discussion")[0].style.display = "none"
    } else {
        alert("Wrong username or password !!!");
        window.localStorage.setItem("loggedIn", false);
        document.getElementById("login-failed").style.display = "block";
        document.getElementsByClassName("body-content-discussion")[0].style.display = "none"
    }
})

signoutbutton.addEventListener("click", function (event) {
    window.localStorage.setItem("loggedIn", false);
    document.getElementsByClassName("sign-in")[0].style.display = "inline-block";
    document.getElementsByClassName("signed-in")[0].style.display = "none";
    document.getElementsByName("password")[0].value = "";
    document.getElementsByName("username")[0].value = "";
    document.getElementsByClassName("body-content-discussion")[0].style.display = "none"
    location.reload()
})
if (window.localStorage.getItem("loggedIn") == "true") {
    profilename.innerHTML = window.localStorage.getItem("currentUser")
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

let solution__energysaving = document.getElementById("solution-causes")
let solution__affect = document.getElementById("solution-affect")
let solution__result = document.getElementById("solution-result")
let solution__solution = document.getElementById("solution-solution")
let solution__video = document.getElementById("body-content-solution-content__video")
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
if (window.localStorage.getItem("loggedIn") == "true") {
    document.getElementsByClassName("body-content-discussion")[0].style.display = "block"
} else {
    document.getElementsByClassName("body-content-discussion")[0].style.display = "none"
}
if (window.localStorage.getItem("chatcontent") === null) {
    window.localStorage.setItem("chatcontent", JSON.stringify([]));
}
let chatcontent = JSON.parse(window.localStorage.getItem("chatcontent"));
let chatboxcontent = document.getElementById("chat-content")
let chatinput = document.getElementById("chat")
function buildchatcontent() {
    let HTML = ""
    for (i = 0; i < chatcontent.length; i++) {
        HTML += `<div><b>${chatcontent[i].name} :</b><span>${chatcontent[i].message}</span></div>`
    } 
    chatboxcontent.innerHTML = HTML
    chatinput.value = ""
}
function clickinput(){
    document.getElementById("chat").focus();
}
buildchatcontent()
let messageChat = document.getElementById("chat")
let postchat = document.getElementById("postChat")
postchat.addEventListener("click", function (event) {
    let messageObj = {}
    if(messageChat.value == ""){
        alert("Type in your thought !!!")
    }else{
    messageObj.name = window.localStorage.getItem("currentUser")
    messageObj.message = messageChat.value
    chatcontent.push(messageObj)
    window.localStorage.setItem("chatcontent", JSON.stringify(chatcontent))
    buildchatcontent()}
})
function facebook(){
    window.open(
        'https://www.facebook.com/truong.tun.188/',
        '_blank' // <- This is what makes it open in a new window.
      );
}
function link(){
    if(window.localStorage.getItem("loggedIn") == "false"){
        alert("You need to sign in to go to discussion !")
    }else{
        document.getElementById("link-discussion").href = "#discussion-link"
        document.getElementById("link-discussion").click()
    }
}