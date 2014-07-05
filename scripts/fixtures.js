Pickl.prototype.Fixture = (function(){

	var config = {};
	config.title = 'Options';
	config.colors = { background:'#e2e2e2' };
	config.fieldsets = [

		{

			name:'Orientation',
			fields:[
				{
					name:'orientation',
					values:['righty','lefty'],
					selected:0
				}
			]

		},

		{

			name:'Instrument',
			fields:[
				{
					name:'instrument',
					values:['guitar','banjo','ukelele'],
					selected:0
				},
				{
					name:'strings',
					values:['5 string','6 string','7 string'],
					selected:1
				}
			]

		}

	];

	return config;

}());