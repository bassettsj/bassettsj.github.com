cp = require('child_process')
gutil = require('gulp-util')

module.exports = (gulp) ->
  gulp.task(
    'jekyll'
    , ->
      jekyll = cp.spawn('jekyll'
        , [
          'build --config _config.yml,_config_dev.yml'
        ]
      )

      jekyll.stdout.on('data', (data)->
        console.log( 'jekyll: ' + data )
      )
      jekyll.stderr.on('data', (data)->
        error = new gutil.PluginError('jekyll', data )
      )


      jekyll.on('close', (code) ->
        if ( code isnt 0  )

          error = new gutil.PluginError('jekyll'
          , 'exited with code ' + code
          )
      )
  )
