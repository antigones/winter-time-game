class Action {

	constructor(gameContext) {
		this.canvas = window.interactiveCanvas;
		const that = this;
		this.gameContext = gameContext;
		this.storyCounter = -1;
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
		var e = this.gameContext.container;
		e.className = "fadeout";
		function sleep (time) {
		  return new Promise((resolve) => setTimeout(resolve, time));
		}
		sleep(500).then(() => {
			e.innerHTML = "<h1>"+this.gameContext.stories[this.storyCounter].title+"</h1>";
			e.className = "fadein";
		});
	}
	
	nextStory() {
		var e = this.gameContext.container;		
		this.fade();
		this.storyCounter++;
		if (this.storyCounter > this.gameContext.stories.length - 1) {
			this.storyCounter = 0;	
		}
	}
	
	previousStory() {
		var e = this.gameContext.container;
		this.fade();
		this.storyCounter--;
		if (this.storyCounter <   0 ) {
			this.storyCounter = this.gameContext.stories.length;	
		}
	}
	
  
}
