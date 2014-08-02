gulp = require('gulp')

cp = require('child_process')
gutil = require('gulp-util')
pkg  = require('./../package.json')
config = require('./config.json')


require('./scripts.coffee')(gulp)
require('./styles.coffee')(gulp)
require('./jekyll.coffee')(gulp)



gulp.task('watch', [
  'watchStyles'
  'watchScripts'
  'jekyll-serve'
  ])
gulp.task('watchStyles', ->
  gulp.watch(config.paths.scss, ['styles'])
)


gulp.task('watchScripts', ->
  gulp.watch( '_src/**/*.{js,coffee}', ['scripts'])
)

gulp.task('default',['styles', 'scripts', 'jekyll'] )
