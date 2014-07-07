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

	var orientationField             = {};
	orientationField.name            = 'orientation';
	orientationField.values          = ['righty','lefty',1,2,3,4,5,6,7,8,9,10];
	orientationField.selected        = 0;

	var orientationFieldSet          = {};
	orientationFieldSet.name         = 'Orientation';
	orientationFieldSet.fields       = [orientationField];

	var config                       = {};
	config.themes                    = themes;
	config.title                     = 'Options';
	config.fieldsets                 = [orientationFieldSet];

	return config;

}());