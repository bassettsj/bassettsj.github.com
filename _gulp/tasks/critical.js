import gulp from 'gulp'
import {stream as critical} from 'critical'

gulp.task('critical', ['styles', 'scripts', 'jekyll', 'html'], () => {
  return gulp.src('_site/**/*.html')
    .pipe(critical({
        base: '_site/',
        inline: true,
        css: ['_site/assets/css/i.css']
      }))
      .pipe(gulp.dest('_site'))
})
