connect = require('gulp-connect')

exports.server = (gulp) ->
  gulp.task('server', ->
    connect.server({
      root: './_site',
      livereload: true
      })
  )
