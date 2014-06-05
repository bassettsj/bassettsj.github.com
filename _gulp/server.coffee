connect = require('gulp-connect')

exports.server = (gulp) ->
  gulp.task('server', ->
    connect.server({
      root: './_site',
      livereload: true
      })
  )

exports.reload = (gulp) ->
  gulp.task('reload', ->
    gulp.src('_site/**/*')
      .pipe(connect.reload())
  )
  gulp.task('watchJekyll', ->
    gulp.watch(['_site/**/*'], ['reload'])
  )
