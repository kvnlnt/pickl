Pickl.prototype.displayOptions = function(fieldIndex){

	// console.log(field);
	var options = this.renderOptions(fieldIndex);
	options.animate({'transform':'translate(0,0)'}, 200, mina.easin);

};

// Pickl.prototype.displayOptions = function(selector, slideIn){

// 	var slideIn  = void 0 === slideIn ? true : slideIn;
// 	var x 		 = true === slideIn ? 0 : this.form.width;
// 	var selector = this.pickl.selectors[selector];

// 	selector.animate({'transform':'translate('+x+',0)'},200, mina.easin);

// };

// Pickl.prototype.displayNext = function(field, text){

// 	var curr  = field.selected;
// 	var total = field.values.length - 1;
// 	var next  = curr + 1 > total ? 0 : curr + 1;

// 	field.selected = next;
// 	text.node.textContent = field.values[next];

// };

// Pickl.prototype.displayPrev = function(field, text){

// 	var curr  = field.selected;
// 	var total = field.values.length - 1;
// 	var prev  = curr - 1 < 0 ? total : curr - 1;

// 	field.selected = prev;
// 	text.node.textContent = field.values[prev];

// };