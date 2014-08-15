Pickl.prototype.render = function(){

	this.pickl 		      = this.pickl || this.renderForm();
	this.pickl.clear();
	this.pickl.background = this.renderBackground();
	this.pickl.title      = this.renderTitle();
	this.pickl.fields     = this.renderFields();

};

Pickl.prototype.renderForm = function(){

	var form = null === this.svg ? Snap(this.form.width, this.form.height) : this.svg;
	var klass = form.attr('class') + ' pickl';
	form.attr({ 'class':klass, 'transform':'translate('+this.form.width+',0)' });

	return form;

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

Pickl.prototype.renderFields = function(){

	var that   = this;
	var layout = this.calcLayout().fields;
	var fields = this.pickl.g().attr('class','fields');
	var y      = 90;

	_.each(this.config.fields, function(field){

		if(field.enabled){

			var fieldGroup  = fields.g().attr({ 'class':'field button', 'transform':'translate('+layout.x+','+y+')' });
			var fieldTarget = fieldGroup.rect(0,0,layout.width, 40).attr({ 'class':'touchTarget' });
			var fieldTitle  = fieldGroup.text(layout.x + 70,20, field.name).attr({ 'class':'title' });
			var fieldValue  = fieldGroup.text(layout.x + 80, 20, field.options[field.value].name).attr('class','value');		
			y 			   += 41;

			var click = void 0 === field.callback || null === field.callback ? function(){that.displayOptions(field)} : field.callback;
			fieldGroup.click(click,that);

		}

		if(field.type === 'button'){

			var fieldGroup  = fields.g().attr({ 'class':'field button', 'transform':'translate('+layout.x+','+y+')' });
			var fieldTarget = fieldGroup.rect(0,0,layout.width, 40).attr({ 'class':'touchTarget' });
			var fieldTitle  = fieldGroup.text(layout.width/2,20, field.text).attr({ 'class':'text' });
			y 			   += 41;

			fieldGroup.click(field.callback,that);

		}

	});

	var close  = this.pickl.g().attr({'class':'button close', 'transform':'translate('+layout.x+','+(y+20)+')'});
	var w      = this.form.width * .85;
	var h      = 50;
	var target = close.rect(0,0,w,h).attr({ 'class':'touchTarget' });
	var text   = close.text(layout.width/2, 25, 'done');

	close.click(this.save, this);

	return fields.selectAll('.field');

};

Pickl.prototype.renderOptions = function(field){

	var that          = this;
	var layout        = that.calcLayout().fields;
	var options       = this.pickl.g().attr({ 'class':'options' });
	var background    = options.rect(0,0,that.form.width, that.form.height).attr('class','background');
	var fieldsHeight  = that.form.height-140;
	var isClipping    = (_.size(field.options) * 40) > fieldsHeight;
	var fieldsShowing = Math.floor(fieldsHeight/40);
	var fieldHeight   = isClipping ? fieldsHeight/fieldsShowing : 40;
	var fieldMaskRect = options.rect(layout.x,50,layout.width, fieldsHeight + (fieldsShowing)).attr({'fill':'#FFFFFF'});
	var fieldMask     = options.mask().add(fieldMaskRect).attr({'class':'mask'});
	var fieldWrapper  = options.g().attr({ 'class':'fields', mask:fieldMask });
	var fields        = fieldWrapper.g().data('y',0);
	var selected      = field.options[field.value].value;
	var selectedIndex = 0;
	var y             = 50;
	var x             = layout.x - 1;

	// position options container
	options.attr({ 'transform':'translate('+this.form.width+',0)' });

	// track selected index
	var selectedIndexCounter = 1;

	// option fields
	_.each(field.options, function(option, k){

		var fieldGroup  = fields.g().attr({ 'class':'field button', 'transform':'translate('+x+','+y+')' });
		var fieldTarget = fieldGroup.rect(0,0,layout.width, fieldHeight).attr({ 'class':'touchTarget' });
		var fieldText   = fieldGroup.text(fieldHeight,fieldHeight/2, option.name).attr({ 'class':'value' });
		var klass       = option.value === selected ? 'check selected' : 'check';
		var check       = fieldGroup.g().attr({ 'class':klass});
		var checkTarget = check.rect(0,0,fieldHeight,fieldHeight).attr({ 'class':'touchTarget' });
		var checkMark   = check.text(fieldHeight/4,fieldHeight/2,'\uf00c').attr({ 'class':'value' });

		if(option.value === selected){
			selectedIndex = selectedIndexCounter;
		};

		selectedIndexCounter += 1;
		y += fieldHeight + 1;

		fieldGroup.click(function(){ 
			field.value = k;
			options.animate({ 'transform':'translate('+this.form.width+',0)'}, 200, mina.easeout, function(){ this.remove(); });
			that.displayField(option.disable, false);
			that.displayField(option.enable, true);
			that.render();
		}, that);

	});

	// add Title
	var titleBG = options.rect(0,0,that.form.width, 50).attr({'class':'background'});
	var title   = options.text(that.form.width/2, 27, field.name).attr('class','title options');


	// generate scrolling
	var scrollBG      = options.rect(0,(fieldsHeight + fieldsShowing + 50),that.form.width,90).attr({'class':'background'});
	var scrollBtnY    = this.form.height - 70;
	var scrollClass   = true === isClipping ? '' : 'hide';
	var down          = options.g().attr({ 'class':'field button scroll ' + scrollClass, 'transform':'translate('+this.form.width/2+','+scrollBtnY+')' });
	var scrolling     = true;
	var downTarget    = down.rect(0,0,layout.width/2-2, fieldHeight).attr({ 'class':'touchTarget' });
	var downText      = down.text(layout.width/4,fieldHeight/2,'\uf078').attr({ 'class':'value' });
	var up            = options.g().attr({ 'class':'field button scroll ' + scrollClass, 'transform':'translate('+layout.x+','+scrollBtnY+')' });
	var upTarget      = up.rect(0,0,layout.width/2-2, fieldHeight).attr({ 'class':'touchTarget' });
	var upText        = up.text(layout.width/4,fieldHeight/2,'\uf077').attr({ 'class':'value' });

	// Scrolling logic
	var scrollDownStart = function(){ scrolling = true; scrollDown(); };
	var scrollStop 		= function(){ scrolling = false; };
	var scrollDown 		= function(){
		var y = fields.data('y') - (fieldHeight + 1);
		var threshold = -(_.size(field.options) - fieldsShowing) * (fieldHeight + 1); // num of fields minus num of fields possible to show time field height
		if(Math.ceil(y) >= threshold){
			fields.animate({'transform':'translate(0,'+y+')'}, 100, mina.easeout, function(){
				if(scrolling) scrollDown();
			});
			fields.data('y',y);
		}

	};

	var scrollUpStart = function(){ scrolling = true; scrollUp(); };
	var scrollUp 	  = function(){
		var y = fields.data('y') + (fieldHeight + 1);
		if(Math.floor(y) <= 0){
			fields.animate({'transform':'translate(0,'+y+')'}, 100, mina.easeout, function(){
				if(scrolling) scrollUp();
			});
			fields.data('y',y);
		}
	};

	down.mousedown(scrollDownStart);
	down.mouseup(scrollStop);
	up.mousedown(scrollUpStart);
	up.mouseup(scrollStop);

	// auto scroll to selected item if it's hidden
	if(selectedIndex > fieldsShowing){
		var y = -(selectedIndex - fieldsShowing) * (fieldHeight + 1);
		fields.attr({'transform':'translate(0,'+y+')'});
		fields.data('y',y);

	}

	return options;


};