import gulp from 'gulp'
import browserify from 'gulp-browserify'
import rename from 'gulp-rename'

gulp.task('scripts', () => {
  return gulp.src(['./_src/main.coffee'], { read: false })
    .pipe(
      browserify({
        transforms: ['coffeeify', 'minifyify'],
        extensions: ['.coffee'],
        shim: {
          prism: {
            path: './bower_components/prismjs/prism.js',
            exports: 'Prism'
          }
        }
      })
    )
    .pipe(rename('main.pkg.js'))
    .pipe(gulp.dest('./assets/js/'))
})
