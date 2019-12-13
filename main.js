window.onload = () => {
	this.action = new Action(this);
    // Call setCallbacks to register assistant action callbacks.
    this.action.setCallbacks();
  	window.focus();
};
