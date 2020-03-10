const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginButton = document.getElementById("login-button");
const loginMessage = document.getElementById("login-message");
const userName = document.getElementById("login-username");
const logoutButton = document.getElementById("logout-button");


loginButton.onclick = function() {
	fb.login(loginEmail.value,loginPassword.value);

	//loginMessage.textContent = "You logged in.";

};

logoutButton.onclick = funcion() {
	fb.logout();
};

     // adds login for hitting enter
loginPassword.addEventListener('keyup', function(event) {
	if (event.which == 13) {
	fb.login(loginEmail.value,loginPassword.value);
	
	}
});

function onError(errorMessage){
	loginMessage.textContent = errorMessage
}

function userLoggedIn(uid, displayName) {
	userName.textContent = "Welcome" + displayName + ".";

	document.body.classList.remove('auth');

}