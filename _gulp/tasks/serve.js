import gulp from 'gulp'
import browserSync from '../browser-sync'

// Static server
gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: '_site'
    }
  })
})
