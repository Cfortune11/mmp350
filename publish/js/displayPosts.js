const posts = js.getEl('posts');

function createPost(postData, userInfo, postId) {
	const post = js.createEl('div', 'post');

	posts.insertBefore(post, posts.firstElementChild);



	const text= js.createEl('div','post-text', postData.text);
	post.appendChild(text);
}