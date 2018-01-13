import gulp from 'gulp'
import ghPages from 'gulp-gh-pages'

gulp.task('publish', ['build'], () => {
  return gulp.src('_site/**/*')
    .pipe(ghPages({
      branch: 'master'
    }))
})
