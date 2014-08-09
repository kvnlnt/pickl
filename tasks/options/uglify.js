module.exports = {
    dist: {
		options: {
			beautify : {
			    ascii_only : true
			} 		
		},
		files: {
			'dist/pickl.min.js': ['dist/pickl.js']
		}
    }
}