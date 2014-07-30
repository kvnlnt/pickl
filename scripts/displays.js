Pickl.prototype.display = function(){

	this.pickl.animate({ 'transform':'translate(0,0)'}, 200, mina.easein);

};

Pickl.prototype.displayOptions = function(field){

	var options = this.renderOptions(field);
	options.animate({'transform':'translate(0,0)'}, 200, mina.easin);

};

Pickl.prototype.displayField = function(fields, enabled){

	var that = this;
	var fields = "string" === typeof fields ? [fields] : fields;

	_.each(fields,function(field){

		if(void 0 !== that.config.fields[field]) that.config.fields[field].enabled = enabled;

	});

};