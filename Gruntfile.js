module.exports = function(grunt) {

    grunt.initConfig({ 
        jshint: {
            all: ['js/*.js', 'Gruntfile.js']
        },
        watch: {
            scripts: {
                files: ['js/*.js', 'Gruntfile.js', 'css/*.css'],
                tasks: ['jshint'],
                options: {
                    spawn: false,
                },
            },
        },
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['js/*.js'],
                dest: 'dist/built.js',
            },
        },        
    });
    
    //load npm tasks
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
};