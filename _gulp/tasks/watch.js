import gulp from 'gulp'
import config from '../config'
import {reload} from '../browser-sync'

gulp.task('watch', [
  'watchify',
  'watchStyles',
  'watchHtml'
])

gulp.task('watchStyles', () => gulp.watch(config.paths.scss, ['styles']))

gulp.task('watchHtml', () => {
  gulp.watch(
    [
      '*',
      '_includes/**/*',
      '_layouts/**/*',
      '_posts/**/*',
      'assets/**/*',
      'info/**/*',
      'projects/**/*',
      'search/**/*',
      'tumblr_files/**/*',
      'archive/**/*'
    ],
    ['jekyll', 'html'],
    reload
  )
})

gulp.task('dev', ['watch', 'serve'])
