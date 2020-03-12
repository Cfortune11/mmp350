const profileUID = location.search.split('=')[1];

const displayName = js.getEl('display-name');
const bioInput = js.getEl('profile-bio');
const updateButton = js.getEl('update-profile');
const locationInput = js.getEl('profile-location');
const hobbiesInput = js.getEl('profile-hobbies');
fb.getUserProfile(profileUID);

function displayProfile(userName, userInfo) {
	console.log(userInfo);

	displayName.value = userName;

	if (userInfo.bio) {
		bioInput.value = userInfo.bio;
	}

	if(userInfo.location) {
		locationInput.value = userInfo.location;
	}


    if(userInfo.hobbies) {
    	hobbiesInput.value = userInfo.hobbies;
    }


}






updateButton.onclick = function() {

	// arguments: user id, key, value 
	
	fb.updateProfile(profileUID, 'displayName', displayName.value);
	fb.updateProfile(profileUID, 'bio', bioInput.value);
	fb.updateProfile(profileUID, "location", locationInput.value);
	fb.updateProfile(profileUID, "hobbies", hobbiesInput.value);
};