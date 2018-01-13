import workbox from 'workbox-build';
import gulp from 'gulp';
import config from '../config';

const dist = config.paths.swDist;

gulp.task('service-worker', ['styles', 'scripts', 'jekyll', 'html', 'critical', 'images'], () => {
  return workbox.generateSW({
    globDirectory: dist,
    globPatterns: ['**/*.{html,js,css,png,gif,svg}'],
    swDest: `${dist}/sw.js`,
    clientsClaim: true,
    skipWaiting: true
  }).then(() => {
    console.info('Service worker generation completed.');
  }).catch((error) => {
    console.warn('Service worker generation failed: ' + error);
  });
});
