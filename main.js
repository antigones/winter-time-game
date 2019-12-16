window.onload = () => {
	this.action = new Action(this);
	console.log('getStories');
	fetch("https://jsonplaceholder.typicode.com/posts").then(function(response) {
		this.stories = response.json();
		console.log(this.stories);
		// Call setCallbacks to register assistant action callbacks.
		this.action.setCallbacks();
		window.focus();
	
	}).catch(function(err) {
		console.log(err);
	});

};
