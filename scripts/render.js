Pickl.prototype.render = function(){

	this.pickl            = this.renderForm();
	this.pickl.theme      = this.renderTheme();
	this.pickl.background = this.renderBackground();
	this.pickl.title      = this.renderTitle();
	this.pickl.close      = this.renderClose();
	this.pickl.fieldsets  = this.renderFieldsets();

};

Pickl.prototype.renderForm = function(){

	var form = null === this.svg ? Snap(this.form.width, this.form.height) : this.svg;
	var klass = form.attr('class') + ' pickl';
	form.attr({ 'class':klass });

	return form;

};

Pickl.prototype.renderTheme = function(){

	var theme = $('<style>');
		theme.attr('type','text/css');
		theme.attr('class','picklTheme');
		theme.append('.pickl .background { fill: '+this.theme.background+'; }');
		theme.append('.pickl .fieldset { fill: '+this.theme.fieldset+'; }');

		theme.append('.pickl .button > .touchTarget, .pickl .field > .touchTarget { fill: '+this.theme.touchTarget+'; }');
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

Pickl.prototype.renderFieldsets = function(){

	var that      = this;
	var layout    = this.calcLayout();
	var fieldsets = this.pickl.g().attr('class','fieldsets');

	_.each(this.config.fieldsets, function(fieldset, i){

		var fieldsetX     = layout.fieldsets[i].x;
		var fieldsetY     = layout.fieldsets[i].y + 100;
		var fieldsetGroup = fieldsets.g().attr({ 'class':'fieldset', 'transform':'translate('+fieldsetX+','+fieldsetY+')' });
		var fieldsetTitle = fieldsetGroup.text(that.form.width/2,0,fieldset.name);

		_.each(fieldset.fields, function(field, j){

			var fieldX               = layout.fieldsets[i].fields[j].x;
			var fieldY               = layout.fieldsets[i].fields[j].y + 25;
			var fieldW               = layout.fieldsets[i].fields[j].width;
			var fieldGroup           = fieldsetGroup.g().attr({ 'class':'field', 'transform':'translate('+fieldX+','+fieldY+')' });
			var fieldTarget          = fieldGroup.rect(0,0,fieldW,40).attr({ 'class':'touchTarget' });
			var fieldName            = fieldGroup.text(fieldW/2,20,'');

			var fieldPrev            = fieldGroup.g().attr({ 'class':'button arrow' });
			var fieldPrevTarget      = fieldPrev.rect(0,0,40,40).attr({ 'class':'touchTarget' });
			var fieldPrevArrow       = fieldPrev.text(20,20,'');
			fieldPrevArrow.node.innerHTML = '&#xf104';

			var fieldNext            = fieldGroup.g().attr({ 'class':'button arrow' });
			var fieldNextTarget      = fieldNext.rect(fieldW-40,0,40,40).attr({ 'class':'touchTarget' });
			var fieldNextArrow       = fieldNext.text(fieldW-20,20,'');
			fieldNextArrow.node.innerHTML = '&#xf105';

			fieldName.node.innerHTML = field.values[field.selected];
			fieldNext.click(function(){ that.displayNext(field, fieldName) }, that);
			fieldPrev.click(function(){ that.displayPrev(field, fieldName) }, that);

		});

	});

	return fieldsets.selectAll('.fieldset');

};