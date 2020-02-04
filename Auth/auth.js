const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginButton = document.getElementById("login-button");
const loginMesssage = document.getElementById("login-message");



loginButton.onclick = function() {
	console.log(LoginEmail.value, loginPassword.value);
	loginMessage.textContent = "you logged in.";
};