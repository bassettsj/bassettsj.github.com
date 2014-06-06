---
title: Getting going with gulp
tagline: What all the cool kids are doing...
layout: post
tags:
 - js
 - gulp
 - front-end-ops
 - how-to
categories:
  - front-end-ops
---

Coming off of having a presentation on the subject of front-end operations using grunt, I was feeling like I have a certain amount of expertise with Grunt, and a new appriciation for it, but now I want to try my hand out on the new Gulp build tool for Node.js. Gulp leverages the core power behind Node.js and uses it to enforce developers to not write out verbose configuration files, but rather write their own tasks using the Node APIs.


### Getting started


#### Install CLI

You need to install gulp globally first so that it can be available on your path, to test try using the `--version` to make sure that it is installed correctly.

```bash
$ npm install -g gulp
...
$ gulp --version
[gulp] [14:06:30] CLI version 3.7.0
```

#### Package.json and packages!

If you don't already have a `package.json` in your project, you may want to use `npm init` to get the nice little CLI dialog to create it for you. Once the file is available, we will want to install a local gulp package, `npm install --save-dev gulp`. Now we can get started.

#### Using coffeesript?

I try to use CoffeeScript whenever possible, I find there is less of a change of syntax errors like missing semi-colons or commas. Grunt had built in support for CoffeeScript, but Gulp does not, and I doubt it will. The easiest way I found to allow you to write tasks in coffee-script is by requiring it at the base `gulpfile.js`. You will also need to install it with `npm install --save-dev coffee-script`. I wanted to seperate out the tasks into a couple of small files as well, in a directory I called `_gulp` so jekyll will ignore it by default.

```javascript
/**
* @file gulpfile.js
*/

require('coffee-script/register');
// then the coffeescript can be compiled on the fly.

// included a new file in _gulp folder
// added that since the project is a jekyll blog
require('./_gulp/index.coffee');
```


#### First task

Well let's compile sass down, there are two good plugin's out there. The first, [`gulp-sass`](https://github.com/dlmanning/gulp-sass) uses the [`node-sass`](https://github.com/andrew/node-sass), which is wicked fast, but has less features and less stable. I went with the ruby sass plugin, [`gulp-ruby-sass`](https://github.com/sindresorhus/gulp-ruby-sass). Then it was pretty easy to get the plugin added to my project. Install the gulp plugin with `npm install --save-dev gulp-ruby-sass`.

```coffeescript
##
@file ./_gulp/index.coffee
##

gulp = require('gulp') #load gulp
sass = require('gulp-ruby-sass') # load the gulp sass plugin

```

Now that we have these set up, I added the first task using the `gulp.task` method to add the new task to the markup.

```coffeescript
#contiued above, register the task
gulp.task('styles', ->
  gulp.src('./_scss/**/*.scss') #the source
    # pipe is streaming the results to the next task
    .pipe(sass()) # the sass plugin compiles here
    .pipe(gulp.dest('./assets/css/')) # then the `dest` method outputs the results
)
```
#### Moving each task into small modules

So just like [`load-grunt-config`](https://github.com/firstandthird/load-grunt-config), it is nice to have smaller pieces of code to work with, so splitting the tasks into modules would be fairly easy. The `scripts.coffee` module would go into `./_src/scripts.coffee`, then we could just pass the gulp object to the function.

```coffeescript
# @file _src/scripts.coffee
coffee = require('gulp-coffee')
uglify = require('gulp-uglify')
concat = require('gulp-concat')
pkg = require('../package.json')
config = require('./config.json')
isProd = ( config.env == 'production' )

module.exports = ( gulp ) -> #Pass in gulp here
  gulp.task(
    'scripts', ->
      gulp.src(config.paths.scripts)
        .pipe(coffee())
        .pipe(concat( pkg.name + '.pkg.js'))
        .pipe( if isProd then uglify() )
        .pipe(gulp.dest( config.paths.assets + '/js'))
  )
```

Then it is really easy to include the individual tasks, `require('./scripts.coffee')(gulp)`, storing the config in JSON is super easy, although I guess I could use the package.json config key in the spec.

#### Writing my own Jekyll plugin with a few lines

Simple enough to get started. I think you start seeing how easy it would be to write your own plugins to use. The only jekyll plugin for gulp isn't very stable yet, so I thought I would give writting a custom task that uses the child process module to span a new process and handle the errors and stodout a bit.

```coffeescript
# @file _gulp/jekyll.coffee
cp = require('child_process')
gutil = require('gulp-util')

module.exports = (gulp) ->
  gulp.task( 'jekyll', ->
    jekyll = cp.spawn('jekyll', ['build'])
    jekyll.stdout.on('data', (data)->
      console.log( 'jekyll: ' + data )
    )
    jekyll.stderr.on('data', (data)->
      error = new gutil.PluginError('jekyll', 'Jekyll errored with : ' + data )
    )
    jekyll.on('close', (code) ->
      if ( code isnt 0  )
        error = new gutil.PluginError('jekyll'
        , 'exited with code ' + code
        )
    )
  )
```

#### Watch is built in!

Nifty, the watch task is just built into gulp in a nice way. It is just a method you use. Then it becomes really easy to write watch tasks here.

```coffeescript
gulp.task('watchStyles', ->
  gulp.watch(config.paths.scss, ['styles'])
)
```


### So what to do now?

I would like to get more projects using Gulp to try it out a bit more. It is hard though since I don't want to redo them just for the sake of prefering the tool. I will have to wait and see.
