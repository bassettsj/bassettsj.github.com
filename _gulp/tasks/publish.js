import gulp from 'gulp'
import ghPages from 'gulp-gh-pages'

gulp.task('publish', ['styles', 'scripts', 'jekyll', 'html', 'critical', 'images'], () => {
  return gulp.src('_site/**/*')
    .pipe(ghPages({
      branch: 'master'
    }))
})
