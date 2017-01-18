/*
 * grunt-focus-chokidar
 * https://github.com/tgorgdotcom/grunt-focus-chokidar
 *
 * Copyright (c) 2013 Joey Trapp
 * Copyright (c) 2017 Thomas Gorgolione
 * Licensed under the MIT license.
 */

'use strict';

var ObjectFilter = require('../lib/object_filter');

module.exports = function(grunt) {
  grunt.registerMultiTask('focus', 'Restrict which targets chokidar uses', function() {
    var watchers = grunt.config.get('chokidar');

    if (typeof watchers !== 'object') {
      grunt.fail.warn('chokidar config must be defined and be an object');
      return;
    }

    var filter = new ObjectFilter(this.data),
        options = watchers.options,
        filteredWatchers = filter.process(watchers);

    filteredWatchers.options = options || {};
    grunt.config.set('chokidar', filteredWatchers);
    grunt.task.run(['chokidar']);
  });
};
