cp = require('child_process')
gutil = require('gulp-util')

module.exports = (gulp) ->
  gulp.task(
    'jekyll'
    , ->
      jekyll = cp.spawn('jekyll'
        , [
          'build'
        ]
      )

      jekyll.stdout.on('data', (data)->
        console.log( 'jekyll: ' + data )
      )
      jekyll.stderr.on('data', (data)->
        error = new gutil.PluginError('jekyll', 'Jekyll errored with : ' + data )
      )


      jekyll.on('close', (code) ->
        if ( code isnt 0  )

          error = new gutil.PluginError('jekyll'
          , 'exited with code ' + code
          )
      )
  )
  gulp.task(
    'jekyll-serve'
    , ->
      jekyll = cp.spawn('jekyll'
        , [
          'serve'
          '--watch'
        ]
      )

      jekyll.stdout.on('data', (data)->
        console.log( 'jekyll: ' + data )
      )
      jekyll.stderr.on('data', (data)->
        error = new gutil.PluginError('jekyll', 'Jekyll errored with : ' + data )
      )


      jekyll.on('close', (code) ->
        if ( code isnt 0  )

          error = new gutil.PluginError('jekyll'
          , 'exited with code ' + code
          )
      )
  )
