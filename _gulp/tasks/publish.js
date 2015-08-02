import gulp from 'gulp'
import ghPages from 'gulp-gh-pages'

gulp.task('publish', ['default'], () => {
  return gulp.src('_site/**/*')
    .pipe(ghPages({
      branch: 'master'
    }))
})
