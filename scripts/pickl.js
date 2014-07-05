var Pickl = function(options){

	// DEFAULTS

	    var defaults = {};
	    	defaults.form = { width:300, height:500 };
	    	defaults.config = Fixture.config;
	    	defaults.svg = null;

    // SETTINGS
    
    	_.extend(this, defaults, options);

    // INIT

    	this.render();

};