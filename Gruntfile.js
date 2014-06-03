'use strict';
module.exports = function (grunt) {
  grunt.initConfig({
    //load the package.json for files
    pkg: grunt.file.readJSON('package.json'),

    jekyll:{
      options: {
        bundleExec: true
      },
      serve:{
        options: {
          config: ['_config.yml','_config_dev.yml'],
          serve: true,
          watch: true
        },
      },
    },
    watch:{
      sass:{
        files: ['_sass/**/*.scss'],
        tasks: ['sass:scss', 'autoprefixer', 'cssmin'],
        options: {
              livereload: true,
            },
      },
    },
    sass: {
      scss: {
        files: {
          'assets/css/i.css':'_sass/i.scss'
        },
        options: {
          bundleExec: true,
          sourcemap: true,
          loadPath: ['./assets/bower_components']
        }
      }
    },
    autoprefixer: {
      styles: {
        src: ['assets/css/i.css']
      }
    },
    cssmin:{
      styles: {
        cwd: 'assets/css/',
        src: ['**/*.css', '!**/*.min.css'],
        dest:  'assets/css/',
        ext: '.min.css',
        flatten: true,
        expand: true
      }
    }


  });

  require('load-grunt-tasks')(grunt);


  grunt.registerTask('default',  ['sass', 'autoprefixer', 'cssmin' , 'jekyll:serve' ]);
  grunt.registerTask('serve', ['jekyll:serve', 'watch']);

};
