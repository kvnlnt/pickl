Pickl.prototype.Config = (function(){

	var themes                       = {};
	themes.plain                     = {};
	themes.plain.background          = '#e2e2e2';
	themes.plain.fieldset            = '#666666';
	themes.plain.touchTarget         = '#f2f2f2';
	themes.plain.touchTargetOver     = '#000000';
	themes.plain.buttonTextColor     = '#999999';
	themes.plain.buttonTextColorOver = '#e2e2e2';
	themes.plain.buttonStroke        = '#e2e2e2';
	themes.plain.modalBackground     = '#f2f2f2';

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
	f3.values     = [6,5,4,2,1,100,10,12,13,14,15,16];
	f3.selected   = 0;

	var config    = {};
	config.themes = themes;
	config.title  = 'Options';
	config.fields = [f1, f2, f3];

	return config;

}());