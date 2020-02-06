/* firebase helper functions for mmp350 */

const fb = {}; // firebase helpers

/* creates a user */
fb.create = function(userName, email, password) {
	firebase.auth().createUserWithEmailAndPassword(email, password)
		.then(credential => {
			const ref = firebase.database().ref('users').child(credential.user.uid)
				.update({ displayName: userName })
				.then(() => { location.href = 'index.html '});
		})
		.catch(error => { fb.onError(error.message); });
};

/* logs into firebase, calls onError if there's an error */
fb.login = function(email, password) {
	firebase.auth().signInWithEmailAndPassword(email, password)
		.then(() => { console.log('success'); })
		.catch(error => { fb.onError(error.message); });
};

/* logs out of firebase */
fb.logout = function() {
	firebase.auth().signOut();
};

fb.onError = function(message) {
	if (typeof onError === 'function') onError(error.message);
};

fb.getUsers = function(userCallback, callback) {
	let count = 0;
	const users = {};
	firebase.database().ref('users').on('child_added', user => {
		users[user.key] = user.val();
		count += 1;
		if (userCallback) userCallback(user.key, user.val().displayName, user.val().bio, user.val().imageURL);
	});

	firebase.database().ref('users').once('value', snapshot => {
		if (count === snapshot.numChildren()) {
			if (callback) callback(users);
		}
	});
};

fb.loadPosts = function() {
	fb.getUsers(undefined, users => {
		firebase.database().ref('posts')
			.on('child_added', post => {
				createPost(post.val(), users[post.val().uid], post.key);
			});
	});
};

fb.loadPost = function(id) {
	firebase.database().ref('posts').child(id).on('value', post => {