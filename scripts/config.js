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
	themes.zen                       = {};
	themes.zen.background            = '#000000';
	themes.zen.fieldset              = '#666666';
	themes.zen.touchTarget           = '#222222';
	themes.zen.touchTargetOver       = '#444444';
	themes.zen.titleColor            = '#FFFFFF';
	themes.zen.buttonTextColor       = '#999999';
	themes.zen.buttonTextColorOver   = '#FFFFFF';
	themes.zen.buttonStroke          = '#333333';
	themes.zen.modalBackground       = '#000000';

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
	config.themes = themes;
	config.title  = 'Options';
	config.fields = [f1, f2, f3];

	return config;

}());