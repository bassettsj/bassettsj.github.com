gulp = require('gulp')

cp = require('child_process')
gutil = require('gulp-util')
pkg  = require('./../package.json')
config = require('./config.json')
connect = require('gulp-connect')


require('./scripts.coffee')(gulp)
require('./styles.coffee')(gulp)
require('./jekyll.coffee')(gulp)
require('./server.coffee').server(gulp)
require('./server.coffee').reload(gulp)

gulp.task('watch', [
  'watchStyles'
  'watchJekyll'
  'watchScripts'
  'watchHtml'
  'watchAssets'
  ])
gulp.task('watchStyles', ->
  gulp.watch([config.paths.scss], ['styles'])
)
gulp.task('watchJekyll', ->
  gulp.watch([config.paths.jekyll], ['jekyll'])
)

gulp.task('watchScripts', ->
  gulp.watch([config.paths.scripts], ['scripts'])
)

gulp.task('default',['styles', 'scripts', 'jekyll', 'server', 'watch'] )
