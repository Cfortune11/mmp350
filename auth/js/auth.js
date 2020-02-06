const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginButton = document.getElementById("login-button");
const loginMessage = document.getElementById("login-message");
const username = document.getElementById("username");


loginButton.onclick = function() {
	fb.login(loginEmail.value,loginPassword.value)

	//loginMessage.textContent = "You logged in.";

};

function onError(errorMessage){
	loginMessage.textContent = errorMessage
}

function userLoggedIn(uid, displayName) {
	userName.textContent = "Welcome" + displayName;
}