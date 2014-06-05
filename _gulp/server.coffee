connect = require('gulp-connect')

exports.server = (gulp) ->
  gulp.task('server', ->
    connect.server({
      root: './_site',
      livereload: true
      })
  )

exports.reload = (gulp) ->
  gulp.task('reloadHtml', ->
    gulp.src('_site/**/*.html')
      .pipe(connect.reload())
  )
  gulp.task('watchHtml', ->
    gulp.watch(['_site/**/*.html'], ['reloadHtml'])
  )
  gulp.task('watchAssets', ->
    gulp.watch(['_site/assets/**/*'], ['reloadAssets'])
  )
  gulp.task('reloadAssets', ->
    gulp.src('_site/assets/**/*')
      .pipe(connect.reload())
    )
