var Fixture = {};

Fixture.config = {};
Fixture.config.title = 'Title';

Fixture.config.colors = {
	background:'#e2e2e2'
};

Fixture.config.fieldsets = [];
Fixture.config.fieldsets.push({

	name:'Options A',
	fields:[
		{
			name:'Option 1',
			values:[1,2,3],
			selected:0
		},
		{
			name:'Option 2',
			values:[1,2,3],
			selected:1
		}
	]

});

Fixture.config.fieldsets.push({

	name:'Options B',
	fields:[
		{
			name:'Option 1',
			values:[1,2,3],
			selected:0
		},
		{
			name:'Option 2',
			values:[1,2,3],
			selected:2
		},
		{
			name:'Option 3',
			values:[1,2,3,4],
			selected:3
		}
	]

});

Fixture.config.fieldsets.push({

	name:'Options C',
	fields:[
		{
			name:'Option 1',
			values:[1,2,3],
			selected:0
		}
	]

});