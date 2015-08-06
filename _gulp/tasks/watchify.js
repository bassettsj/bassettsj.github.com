import gulp from 'gulp'
import browserifyTask from './browserify'

// Start browserify task with devMode === true
gulp.task('watchify', () => browserifyTask(true))
