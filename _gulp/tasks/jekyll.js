import gulp from 'gulp'
import {PluginError} from 'gulp-util'
import {spawn} from 'child_process'

gulp.task('jekyll', (cb) => {
  let jekyll = spawn('jekyll', ['build'], {stdio: 'inherit'})
  jekyll.on('exit', (code) => {
    if (code) {
      return cb(new PluginError('jekyll', 'Jekyll build errored with code:' + code))
    }
    cb()
  })
})
