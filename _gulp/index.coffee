gulp = require('gulp')
_ = require('underscore')
coffee = require('gulp-coffee')
uglify = require('gulp-uglify')
concat = require('gulp-concat')
sass = require('gulp-ruby-sass')
prefix = require('gulp-autoprefixer')
cssmin = require('gulp-cssmin')

fs = require('fs')

pkg  = require('./../package.json')

config = require('./config.json')





paths ={
  scripts: './_src/**/*.coffee'
  scss: [
    './_sass/*.scss'
    '!./_sass/_*.scss'
  ]
}

isProd = ( config.env == 'production' )

gulp.task(
  'scripts', ->
    gulp.src(paths.scripts)
      .pipe(coffee())
      .pipe(concat( pkg.name + '.pkg.js'))
      .pipe(uglify())
      .pipe(gulp.dest('build/js'))



)



gulp.task(
  'styles', ->
    gulp.src(paths.scss)
      .pipe(sass({
        loadPath: ['./assets/bower_components']
        bundleExec: true
        sourcemap: true
      }))
      .pipe(prefix())
      .pipe(if cssmin())
      .pipe(gulp.dest('./assets/css/'))
)

gulp.task('default',['styles', 'scripts'] )
