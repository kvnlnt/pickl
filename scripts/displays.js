Pickl.prototype.display = function(){

	this.pickl.animate({ 'transform':'translate(0,0)'}, 200, mina.easein);

};

Pickl.prototype.displayOptions = function(fieldIndex){

	// console.log(field);
	var options = this.renderOptions(fieldIndex);
	options.animate({'transform':'translate(0,0)'}, 200, mina.easin);

};