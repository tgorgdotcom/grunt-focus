/*
 * grunt-focus-chokidar
 * https://github.com/tgorgdotcom/grunt-focus-chokidar
 *
 * Copyright (c) 2013 Joey Trapp
 * Copyright (c) 2017 Thomas Gorgolione
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    focus: {
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

    watch: {
      default: {
        files: ['lib/**/*.js', 'tasks/**/*.js', 'test/**/*.js'],
        tasks: ['default']
      }
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-chokidar');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', /*'focus', */'nodeunit']);

  grunt.registerTask('autotest', ['chokidar:default']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
