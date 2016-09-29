
module.exports = function (grunt) {


    // // Task-1
    // grunt.registerTask('speak', function(){
    //     console.log('speak....');
    // });

    // // Task-2
    //  grunt.registerTask('drink', function(){
    //     console.log('drinking tea......');
    // });

    // grunt.registerTask('default',['speak','drink']);


    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.initConfig({
        concat: {
            js: {
                src: ['src/**/*.js'],
                dest: 'dist/js/built.js',
            },
            css: {
                src: ['src/**/*.css'],
                dest: 'dist/css/styles.css',
            },
        },
        uglify: {
            min: {
                files: {
                    'dist/js/built.min.js': ['dist/js/built.js']
                }
            }
        },
        less: {
            development: {
                files: {
                    'src/css/style.css': 'src/less/style.less'
                }
            }    
        }
    });


    grunt.registerTask('default', ['less','concat', 'uglify']);


}