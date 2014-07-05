Pickl.prototype.displayNext = function(field, text){

	var curr = field.selected;
	var total = field.values.length - 1;
	var next = curr + 1 > total ? 0 : curr + 1;

	field.selected = next;

	text.node.textContent = field.values[next];

};