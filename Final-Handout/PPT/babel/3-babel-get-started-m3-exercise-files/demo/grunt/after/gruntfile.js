module.exports = function(grunt) {
    //configuration
    grunt.initConfig({
        "babel": {
            options: {
                sourceMap: false
            },
            compile: {
                "expand": true,
                "src": 'src/*.js',
                "flatten": true,
                "dest": 'dist/'
            }
        }
    });

    //load plugins
    grunt.loadNpmTasks('grunt-babel');

    //define task

    grunt.registerTask('default',['babel']);

};
