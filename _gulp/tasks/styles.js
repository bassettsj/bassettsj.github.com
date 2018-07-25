import gulp from 'gulp'
import sass from 'gulp-sass'
import prefix from 'gulp-autoprefixer'
import csso from 'gulp-csso'
import config from '../config'
import browserSync from '../browser-sync'

gulp.task('styles', () => {
  gulp.src(config.paths.scss)
    .pipe(sass({
      includePaths: ['node_modules'],
      sourcemap: true
    }))
    .pipe(prefix())
    .pipe(csso())
    .pipe(gulp.dest(`${config.paths.assets}/css/`))
    .pipe(browserSync.stream())
})
