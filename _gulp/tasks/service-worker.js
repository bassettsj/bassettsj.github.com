import workbox from 'workbox-build';
import gulp from 'gulp';
import config from '../config';

const dist = config.paths.swDist;

gulp.task('service-worker', ['styles', 'scripts', 'jekyll', 'html', 'critical', 'images'], () => {
  return workbox.generateSW({
    globDirectory: dist,
    globPatterns: [
      'index.html',
      'assets/js/**/*.js',
      'assets/css/**/*.css',
    ],
    runtimeCaching: [
      {
        urlPattern: /(bassettsj\.github\.io|bassettsj\.me|(\/))/,
        handler: 'staleWhileRevalidate',
      },
      {
        urlPattern: new RegExp('https://unpkg.com'),
        handler: 'staleWhileRevalidate',        
      },
      {
        urlPattern: new RegExp('https://fonts.googleapis.com/'),
        handler: 'staleWhileRevalidate',
      },
      {
        urlPattern: new RegExp('https://fonts.gstatic.com/'),
        handler: 'staleWhileRevalidate',
      },
      {
        urlPattern: new RegExp('https://www.google-analytics.com/analytics.js'),
        handler: 'staleWhileRevalidate',
      }
    ],
    swDest: `${dist}/sw.js`,
    clientsClaim: true,
    skipWaiting: true,
  });
});
