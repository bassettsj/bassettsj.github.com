import gulp from 'gulp'
import imagemin from 'gulp-imagemin'

gulp.task('images', ['jekyll'], () => {
  return gulp.src('_site/**/*.{png,svg,jpg,gif}')
    .pipe(imagemin({
      progressive: true
    }))
    .pipe(gulp.dest('_site'))
})
