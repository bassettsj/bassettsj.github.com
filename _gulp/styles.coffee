
sass = require('gulp-ruby-sass')
prefix = require('gulp-autoprefixer')
cssmin = require('gulp-cssmin')
rename = require('gulp-rename')
config = require('./config.json')

module.exports = (gulp)->
  gulp.task(
    'styles', ->
      gulp.src(config.paths.scss)
        .pipe(sass({
          loadPath: ["#{config.paths.assets}/bower_components"]
          bundleExec: true
          sourcemap: true
        }))
        .pipe(prefix())
        .pipe(gulp.dest("#{config.paths.assets}/css/"))
      gulp.src([
        "#{config.paths.assets}/css/**/*.css"
        "!#{config.paths.assets}/css/**/*.min.css"
        ])
        .pipe(cssmin())
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest("#{config.paths.assets}/css/"))
  )
