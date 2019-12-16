window.onload = () => {
	this.container = document.getElementById('container')
	this.action = new Action(this);
	console.log('getStories');
	fetch("https://jsonplaceholder.typicode.com/posts").then(function(response) {
		response.json().then(function(data) {
        console.log(data);
		this.stories = data;
		console.log(this.stories);
		// Call setCallbacks to register assistant action callbacks.
		this.action.setCallbacks();
		window.focus();
		});
		
	
	}).catch(function(err) {
		console.log(err);
	});

};
