const signUpEmail = document.getElementById("sign-up-email");
const signUpPassword = document.getElementById("sign-up-password");
const signUpButton = document.getElementById("sign-up-button");
const signUpMessage = document.getElementById("sign-up-message");
const signUpUsername = document.getElementById("sign-up-username");


signUpButton.onclick = function() {
	fb.create(signUpUsername.value, signUpEmail.value, signUpPassword.value)

	

};

function onError(errorMessage){
	signUpMessage.textContent = errorMessage
}

