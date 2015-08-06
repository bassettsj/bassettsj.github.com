import {configure as babelify} from 'babelify'

export default {
  env: 'production',
  paths: {
    assets: './assets',
    scss: ['./_sass/**/*.scss'],
    jekyll: [ './_posts/**/*.md']
  },
  browserify: {
    bundleConfigs: [{
      entries: '_src/index.js',
      dest: 'assets/js',
      outputName: 'main.pkg.js',
      transform: [
        babelify({
          only: /_src/
        })
      ]
    }]
  }
}
