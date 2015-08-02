import gulp from 'gulp'
import config from '../config'
import {reload} from '../browser-sync'

gulp.task('watch', [
  'watchStyles',
  'watchScripts',
  'watchHtml'
])

gulp.task('watchStyles', () => gulp.watch(config.paths.scss, ['styles']))

gulp.task('watchScripts', () => gulp.watch('_src/**/*.{js,coffee}', ['scripts'], reload))

gulp.task('watchHtml', () => {
  gulp.watch(
    [
      '*',
      '_(includes,layouts,posts,assets)/**/*',
      '(info,profects,search,tumblr_files,archive)/**/*'
    ],
    ['jekyll', 'html'],
    reload
  )
})

gulp.task('dev', ['watch', 'serve'])

gulp.task('default', ['styles', 'scripts', 'jekyll', 'html'])
