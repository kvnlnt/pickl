Pickl.prototype.calcLayout = function(){

	var layout = {};
	layout.fieldsets = this.calcFieldsets();

	return layout;

};

Pickl.prototype.calcFieldsets = function(){

	var that = this;
	var fieldsetHeight = 90;

	var fieldsets = _.map(this.config.fieldsets, function(fieldset, y){

		var fieldWidth = (that.form.width * .85) / fieldset.fields.length;
		var startX = (that.form.width * .15)/2;
		var fields = _.map(fieldset.fields, function(field, x){

			return {
				width:fieldWidth,
				x:startX + (fieldWidth * x),
				y:0
			}

		});

		return { 
			x:0,
			y:fieldsetHeight * y,
			fields:fields
		}

	});

	return fieldsets;

};