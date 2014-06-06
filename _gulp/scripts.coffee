uglify = require('gulp-uglify')
browserify = require('gulp-browserify')
pkg = require('../package.json')
config = require('./config.json')
rename = require('gulp-rename')
isProd = ( config.env == 'production' )

module.exports = ( gulp ) ->
  gulp.task(
    'scripts', ->
      gulp.src(['./_src/main.coffee'], { read: false })
        .pipe(
          browserify({
            transforms: ['coffeeify']
            extensions: ['.coffee']
            shim: {
              prism:
                path:
                  './bower_components/prismjs/prism.js'
                exports: 'Prism'

            }
          })
        ).pipe( rename('main.pkg.js'))
        .pipe(gulp.dest('./assets/js/'))

      if isProd
        gulp.src('./assets/js/main.pkg.js')
          .pipe(uglify({
            outSourceMap: 'main.pkg.min.js.map'
            }))
          .pipe(rename('main.pkg.min.js'))
          .pipe(gulp.dest('./assets/js/'))
  )
