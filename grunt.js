module.exports=functions(grunt){

	grunt.initConfig(
	{
		jshint: {
			all: ["prueba1.js"]
		}
	});

	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.registerTask("default",["jshint"]);
};