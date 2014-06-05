connect = require('gulp-connect')

exports.server = (gulp) ->
  gulp.task('server', ->
    connect.server({
      root: './_site',
      livereload: true
      })
  )

exports.reload = (gulp) ->
  gulp.task('watchAssets', ->
    gulp.watch(['_site/assets/{js,css}/**/*.{js,css}'], ['reloadAssets'])
  )
  gulp.task('reloadAssets', ->
    gulp.src(['_site/assets/{js,css}/**/*.{js,css}'])
      .pipe(connect.reload())
    )
