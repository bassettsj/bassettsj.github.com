exec = require('child_process').exec
gutil = require('gulp-util')

module.exports = (gulp) ->
  gulp.task('jekyll', (cb)->
    exec('jekyll build', (err) ->
      if err then cb(err)
      cb()
    )
  )
  gulp.task('jekyll-serve', (cb) ->
    exec('jekyll serve --watch', (err) ->
      if err then cb(err)
      cb()
    )
  )
