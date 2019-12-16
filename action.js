class Action {

	constructor(gameContext) {
		this.canvas = window.interactiveCanvas;
		const that = this;
		this.gameContext = gameContext;
		this.storyCounter = 0;
		this.commands = {
			PLAY: function() {
				that.nextStory();
			},
			NEXT: function() {
				that.nextStory();
			},
			PREVIOUS: function() {
				that.previousStory();
			},
			DEFAULT: function() {
				// do nothing, when no command is found
			},
		};
	}

	/**
	* Register all callbacks used by Google Assistant Action
	* executed during creation time.
	*/
	setCallbacks() {

		const that = this;
		// declare assistant canvas action callbacks
		const callbacks = {
			onUpdate(data) {
				that.commands[data.command ? data.command.toUpperCase() : 'DEFAULT'](data);
			},
		};
		// called by the Interactive Canvas web app once web app has loaded to
		// register callbacks
		this.canvas.ready(callbacks);
	}
  
	fade() {
		var e = that.getElementById("container");
		e.className == "fadeout" ? e.className = "fadein" : e.className = "fadeout";
	}
	
	nextStory() {
		var e = that.getElementById("container");
		if (this.storyCounter >= this.stories.count) {
			this.storyCounter = 0;	
		}
		e.innerHTML = this.stories[this.storyCounter].title;
		this.fade();
		this.storyCounter++;
	}
	
  
}
