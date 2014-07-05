Pickl.prototype.save = function(){

	var picks = {};

	_.each(this.config.fieldsets, function(fieldset){
		_.each(fieldset.fields, function(field){
			picks[field.name] = field.values[field.selected];
		});
	});
	
	this.callback(picks);
	this.pickl.remove();

};