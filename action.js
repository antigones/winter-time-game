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
	
	arrayRotate(arr, reverse) {
		if (reverse) arr.unshift(arr.pop());
			else arr.push(arr.shift());
		return arr;
	}
  
	fade() {
		var e = this.gameContext.container;
		e.className = "fadeout";
		function sleep (time) {
		  return new Promise((resolve) => setTimeout(resolve, time));
		}
		sleep(500).then(() => {
			e.innerHTML = "<h1>"+this.gameContext.stories[0].title+"</h1>";
			e.className = "fadein";
		});
	}
	
	nextStory() {
		var e = this.gameContext.container;			
		this.arrayRotate(this.gameContext.stories);
		this.fade();
		
		
	}
	
	previousStory() {
		var e = this.gameContext.container;
		this.arrayRotate(this.gameContext.stories, true);
		this.fade();
	}
	
  
}
