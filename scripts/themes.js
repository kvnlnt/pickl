Pickl.prototype.themes = (function() {

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
	themes.zen.buttonStroke          = '';
	themes.zen.modalBackground       = '#000000';

	return themes;

}());

Pickl.prototype.themeLoad = function(){

	var style = this.themes[this.theme];

	// remove if present
	$(".picklTheme").remove();

	// now create it
	var css   = '';
	var theme = $('<style>');
		theme.attr('type','text/css');
		theme.attr('class','picklTheme');

		// base
		css += '@font-face {';
		css += 'font-family: \'VarelaRound\';';
		css += 'font-style: normal;'
		css += 'font-weight: 400;';
		css += 'src: local(\'VarelaRound\'), local(\'VarelaRound-Regular\'), url(fonts/Varela_Round/VarelaRound-Regular.woff) format(\'woff\');';
		css += '}';
		css += '.pickl { font-family:\'VarelaRound\'; font-size: 1rem; }';
		css += '.pickl .title { text-transform: uppercase; font-size: 1.5rem; }';
		css += '.pickl .title.options { font-size: .7rem; opacity: 0.5; }';
		css += '.pickl .hide { display: none; }';
		css += '.pickl text { alignment-baseline:central; text-anchor:middle; pointer-events:none; }';
		css += '.pickl .button { cursor: pointer; font-size: 0.85rem; }';
		css += '.pickl .button.close { text-transform: uppercase; }';
		css += '.pickl .button.arrow .touchTarget { stroke:none; }';
		css += '.pickl .field { font-size: 0.85rem; }';
		css += '.pickl .field .title { font-size: .7rem; opacity: 0.5; text-anchor: end; }';
		css += '.pickl .field .value { text-anchor:start; }';
		css += '.pickl .field .check { font-family:\'FontAwesome\'; font-size: 1.25rem; text-anchor:middle; opacity: .2; cursor: pointer; }';
		css += '.pickl .scroll { font-family:\'FontAwesome\'; font-size: 1.25rem; text-anchor:middle; opacity: .8; cursor: pointer; }';
		css += '.pickl .field .check.selected, .pickl .field .check:hover, .pickl .scroll:hover { opacity: 1; }';

		// overrides
		css += '.pickl .background { fill: '+style.background+'; } ';
		css += '.pickl .fieldset { fill: '+style.fieldset+'; } ';
		css += '.pickl .title { fill: '+style.titleColor+';} ';
		css += '.pickl .field text, .close text { fill:'+style.buttonTextColor+'} ';
		css += '.pickl .button > .touchTarget, .pickl .field .touchTarget { fill: '+style.touchTarget+'; } ';
		css += '.pickl .button > .touchTarget { stroke: '+style.buttonStroke+'; } ';
		css += '.pickl .button:hover .touchTarget { fill: '+style.touchTargetOver+'; cursor:pointer; } ';
		css += '.pickl .button:hover text { fill: '+style.buttonTextColorOver+'; } ';
		css += '.pickl .button > .arrow > .touchTarget { fill: '+style.touchTarget+' } ';
		
	theme.append(css);
	$('head').append(theme);

	return theme;

};

