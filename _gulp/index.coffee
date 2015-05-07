'use strict'

gulp   = require('gulp')
config = require('./config')

require('./scripts.coffee')(gulp)
require('./styles.coffee')(gulp)

gulp.task('watch', ['watchStyles', 'watchScripts'])

gulp.task('watchStyles', ->
  gulp.watch(config.paths.scss, ['styles'])
)

gulp.task('watchScripts', ->
  gulp.watch( '_src/**/*.{js,coffee}', ['scripts'])
)

gulp.task('default',['styles', 'scripts'])
