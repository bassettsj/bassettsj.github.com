import workbox from 'workbox-build';
import gulp from 'gulp';
import config from '../config';

const dist = config.paths.swDist;

gulp.task('service-worker', ['styles', 'scripts', 'jekyll', 'html', 'critical', 'images'], () => {
  return workbox.generateSW({
    globDirectory: dist,
    globPatterns: ['**/*.{html,js,css,png,gif,svg,jpeg}'],
    runtimeCaching: [
      {
        urlPattern: new RegExp('https://unpkg.com'),
        strategy: 'staleWhileRevalidate',        
      },
      {
        urlPattern: new RegExp('https://fonts.googleapis.com/'),
        strategy: 'staleWhileRevalidate',
      },
      {
        urlPattern: new RegExp('https://fonts.gstatic.com/'),
        strategy: 'staleWhileRevalidate',
      },
    ],
    swDest: `${dist}/sw.js`,
    clientsClaim: true,
    skipWaiting: true,
  }).then(() => {
    console.info('Service worker generation completed.');
  }).catch((error) => {
    console.warn('Service worker generation failed: ' + error);
  });
});
