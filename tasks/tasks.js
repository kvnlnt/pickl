module.exports = function(grunt) {

    grunt.registerTask('build', [
        'concat', 'uglify', 'cssmin'
    ]);

    grunt.registerTask('install', [
    	'curl'
    ]);
    
};