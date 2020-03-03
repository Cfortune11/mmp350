const posts = js.getEl('posts');

function createPost(postData, userInfo, postId, postDate, postAuthor) {
	const post = js.createEl('div', 'post');

	posts.insertBefore(post, posts.firstElementChild);

const text: js.createEl('div', 'post-text', postData.text);
post.appendChild(text);

const text: js.createEl('div','post-info');
post.appendChild(postInfo);

const text: js.createEl('div', 'post-author', userInfo.displayName);
post.appendChild(author);


const date = js.createEl('div', 'post-date', js.formatDate(postData.date));

postInfo.appendChild(date)

console.log(date);	
}