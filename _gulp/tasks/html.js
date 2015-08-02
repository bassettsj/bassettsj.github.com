import gulp from 'gulp'
import htmlmin from 'gulp-htmlmin'

gulp.task('html', ['jekyll'], () => {
  return gulp.src('_site/**/*.html')

    .pipe(htmlmin({
      removeStyleLinkTypeAttributes: true,
      removeScriptTypeAttributes: true,
      removeEmptyAttributes: true,
      useShortDoctype: true,
      removeRedundantAttributes: true,
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('_site'))
})
