Pickl.prototype.save = function(){

	var picks = {};

	_.each(this.config.fields, function(field){
		if(field.enabled) picks[field.name] = field.options[field.value];
	});
	
	this.callback(picks);
	this.pickl.animate({ 'transform':'translate('+this.form.width+',0)'}, 200, mina.easein);

};