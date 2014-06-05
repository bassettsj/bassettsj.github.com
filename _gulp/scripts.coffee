coffee = require('gulp-coffee')
uglify = require('gulp-uglify')
concat = require('gulp-concat')
pkg = require('../package.json')
config = require('./config.json')
isProd = ( config.env == 'production' )

module.exports = ( gulp ) ->
  gulp.task(
    'scripts', ->
      gulp.src(config.paths.scripts)
        .pipe(coffee())
        .pipe(concat( pkg.name + '.pkg.js'))
        .pipe(
          if isProd then uglify()
          )
        .pipe(gulp.dest( config.paths.assets + '/js'))
  )
