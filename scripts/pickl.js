var Pickl = function(options){

	// DEFAULTS

	    var defaults = {};
	    	defaults.form = { width:320, height:520 };
	    	defaults.config = this.Fixture;
	    	defaults.svg = null;
	    	defaults.callback = function(picks){ console.log(picks); };

    // SETTINGS
    
    	_.extend(this, defaults, options);

    // INIT

    	this.render();

};