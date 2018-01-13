import gulp from 'gulp'
import source from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'
import browserify from 'browserify'
import babelify from 'babelify'
import gutil from 'gulp-util'
import sourcemaps from 'gulp-sourcemaps'
import uglify from 'gulp-uglify'

gulp.task('scripts', () => {
  let b = browserify({
    entries: ['_src/index.js'],
    debug: true,
    transform: [
      'babelify'
    ]
  })

  return b.bundle()
    .pipe(source('main.pkg.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./assets/js/'))
})
