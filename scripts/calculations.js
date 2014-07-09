Pickl.prototype.calcLayout = function(){

	var layout = {};
	layout.fields = this.calcFields();

	return layout;

};

Pickl.prototype.calcFields = function(){

	var height = 40;
	var width  = this.form.width * .85;
	var x      = this.form.width * .15/2;

	return {
		height:height,
		width:width,
		x:x
	}

};