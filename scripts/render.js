Pickl.prototype.render = function(){

	this.pickl            = this.renderForm();
	this.pickl.theme      = this.renderTheme();
	this.pickl.background = this.renderBackground();
	this.pickl.title      = this.renderTitle();
	this.pickl.close      = this.renderClose();
	this.pickl.fields     = this.renderFields();

};

Pickl.prototype.renderForm = function(){

	var form = null === this.svg ? Snap(this.form.width, this.form.height) : this.svg;
	var klass = form.attr('class') + ' pickl';
	form.attr({ 'class':klass, 'transform':'translate('+this.form.width+',0)' });

	return form;

};

Pickl.prototype.renderTheme = function(){

	var theme = $('<style>');
		theme.attr('type','text/css');
		theme.attr('class','picklTheme');
		theme.append('.pickl .background { fill: '+this.theme.background+'; }');
		theme.append('.pickl .fieldset { fill: '+this.theme.fieldset+'; }');

		theme.append('.pickl .button > .touchTarget, .pickl .field .touchTarget { fill: '+this.theme.touchTarget+'; }');
		theme.append('.pickl .button > .touchTarget { stroke: '+this.theme.buttonStroke+'; }');
		theme.append('.pickl .button:hover .touchTarget { fill: '+this.theme.touchTargetOver+'; }');
		theme.append('.pickl .button:hover text { fill: '+this.theme.buttonTextColorOver+'; }');

		theme.append('.pickl .button > .arrow > .touchTarget { fill: '+this.theme.touchTarget+' }');
		
		

	$('head').append(theme);

	return theme;

};

Pickl.prototype.renderBackground = function(){

	var background = this.pickl.rect(0,0,this.form.width,this.form.height);
	background.attr({ 'class':'background' });

	return background;

};

Pickl.prototype.renderTitle = function(){

	var title = this.pickl.text(this.form.width/2, 50, this.config.title);
	title.attr({ 'class':'title' });

	return title;

};

Pickl.prototype.renderClose = function(){

	var close  = this.pickl.g().attr('class','button close');
	var x      = this.form.width * .15 / 2;
	var y      = this.form.height - 70;
	var w      = this.form.width * .85;
	var h      = 50;
	var target = close.rect(x,y,w,h).attr({ 'class':'touchTarget' });
	var text   = close.text(this.form.width/2, y + 25, 'close');

	close.click(this.save, this);

	return close;

};

Pickl.prototype.renderFields = function(){

	var that   = this;
	var layout = this.calcLayout().fields;
	var fields = this.pickl.g().attr('class','fields');
	var y      = 90;

	_.each(this.config.fields, function(field, i){

		var fieldGroup  = fields.g().attr({ 'class':'field button', 'transform':'translate('+layout.x+','+y+')' });
		var fieldTarget = fieldGroup.rect(0,0,layout.width, 40).attr({ 'class':'touchTarget' });
		var fieldTitle  = fieldGroup.text(layout.x + 70,20, field.name).attr({ 'class':'title' });
		var fieldValue  = fieldGroup.text(layout.x + 80, 20, field.values[field.selected]).attr('class','value');		
		y 			   += 41;

		fieldGroup.click(function(){that.displayOptions(i)},that);

	});

	return fields.selectAll('.field');

};

Pickl.prototype.renderOptions = function(fieldIndex){

	var that        = this;
	var layout      = that.calcLayout().fields;
	var options     = this.pickl.g().attr({ 'class':'options' });
	var config      = this.config.fields[fieldIndex];
	var background  = options.rect(0,0,that.form.width, that.form.height).attr('class','background');
	var title       = options.text(that.form.width/2, 27, config.name).attr('class','title options');
	var fields      = options.g().attr({ 'class':'fields' });
	var selected    = config.values[config.selected];
	var y           = 50;
	var x           = layout.x - 1;
	var field       = this.pickl.fields[fieldIndex];

	options.attr({ 'transform':'translate('+this.form.width+',0)' });

	// option fields
	_.each(config.values, function(value, i){

		var fieldGroup  = fields.g().attr({ 'class':'field', 'transform':'translate('+x+','+y+')' });
		var fieldTarget = fieldGroup.rect(0,0,layout.width/2, 40).attr({ 'class':'touchTarget' });
		var fieldText   = fieldGroup.text(40,20, value).attr({ 'class':'value' });
		var klass       = value === selected ? 'check selected' : 'check';
		var check       = fieldGroup.g().attr({ 'class':klass});
		var checkTarget = check.rect(0,0,40,40).attr({ 'class':'touchTarget' });
		var checkMark   = check.text(10,20,'*').attr({ 'class':'value' });

		checkMark.node.innerHTML = '&#xf00c';
		y = i % 2 === 0 ? y : y + 41;
		x = i % 2 === 0 ? layout.width/2 + layout.x + 1 : layout.x - 1;

		check.click(function(){ 
			config.selected = i;
			options.animate({ 'transform':'translate('+this.form.width+',0)'}, 200, mina.easeout, function(){ this.remove(); });
			that.pickl.fields[fieldIndex].select('.value').node.textContent = value;
		}, that);

	});

	return options;


};