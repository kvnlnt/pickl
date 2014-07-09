Pickl.prototype.save = function(){

	var picks = {};

	_.each(this.config.fields, function(field){
		picks[field.name] = field.values[field.selected];
	});
	
	this.callback(picks);
	this.pickl.animate({ 'transform':'translate('+this.form.width+',0)'}, 200, mina.easein);

};