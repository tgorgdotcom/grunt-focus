# grunt-focus-chokidar

*Focus and run a subset of chokidar targets*

Lightly modified from [grunt-focus](https://github.com/joeytrapp/grunt-focus/)

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-focus-chokidar --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-focus-chokidar');
```

## The "focus" task

### Overview
In your project's Gruntfile, add a section named `focus` to the data object passed into `grunt.initConfig()`. Assuming the `watch` config is set with the targets below, a `focus` target can be created that is a subset of the `watch` targets.

```js
grunt.initConfig({
  focus: {
    dev: {
	  exclude: ['test']
    },
	js: {
	  include: ['app', 'lib']
	},
	css: {
	  include: ['css']
	},
	test: {}
  },

  chokidar: {
    app: { ... },
	lib: { ... },
	test: { ... },
	css: { ... }
  }
})
```

Then in your `registerTask`, you would use the `focus:target` instead of `chokidar`.

```js
grunt.registerTask('dev', ['dev_task', 'focus:dev']);
grunt.registerTask('autotest', ['dev_task', 'test_task', 'focus:test']);
```

If you use an autoloading plugin, such as `load-grunt-config` and `jitGrunt`, you'll need to staticially map the grunt-focus-chokidar module to focus:
```js
require('load-grunt-config')(grunt, {
   ...
   jitGrunt: {
      staticMappings: {
         focus: 'grunt-focus-chokidar' // help jitGrunt find grunt-focus-chokidar
      }
   }
});
```

### Options

#### target.include

Array of watch targets that should be included

#### target.exclude

Array of watch targets that should be excluded

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

* 2013-07-08: **0.1.0** Initial release of grunt-focus
* 2013-07-08: **0.1.1** Added gruntplugin keyword to get into grunt plugin repo
* 2016-04-06: **1.0.0** 1.0 Release
* 2017-01-18: **1.0.1** Small modifications to create grunt-focus-chokidar
