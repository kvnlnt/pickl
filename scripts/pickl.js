var Pickl = function(options){

	// DEFAULTS

	    var defaults = {};
	    	defaults.form = { width:300, height:500 };
	    	defaults.config = Fixture;
	    	defaults.svg = null;
	    	defaults.callback = function(picks){ console.log(picks); };

    // SETTINGS
    
    	_.extend(this, defaults, options);

    // INIT

    	this.render();

};