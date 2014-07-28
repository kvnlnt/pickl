Pickl.prototype.Config = (function(){

	var f1        = {};
	f1.name       = 'Orientation';
	f1.values     = ['righty','lefty'];
	f1.selected   = 0;

	var f2        = {};
	f2.name       = 'Instrument';
	f2.values     = ['guitar','banjo','ukelele'];
	f2.selected   = 0;

	var f3        = {};
	f3.name       = 'Strings';
	f3.values     = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
	f3.selected   = 0;

	var config    = {};
	config.title  = 'Options';
	config.fields = [f1, f2, f3];

	return config;

}());