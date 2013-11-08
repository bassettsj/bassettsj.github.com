'use strict';
module.exports = function (grunt) {
  grunt.initConfig({
    //load the package.json for files
    pkg: grunt.file.readJSON('package.json'),

    jekyll:{
      serve:{
        options: {
          config: ['_config.yml'],
          server: true,
          baseurl: "/",
          watch: true,
        },
      },
    },
    watch:{
      sass:{
        files: ['_sass/**/*.scss'],
        tasks: ['compass:devel'],
        options: {
              livereload: true,
            },
      },
    },
    compass:{
      devel:{
        options: {
          sassDir: '_sass',
          cssDir: 'assets/css',
          config: 'config.rb'
        }
      },
      prod:{
        options: {
          sassDir: '_sass',
          cssDir: 'assets/css',
          config: 'config.rb',
          environment: 'production',
          outputStyle: 'compressed',
          force: true
        }
      }
    }


  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');


  //grunt.registerTask('default',  ['copy:fontAwesome','recess', 'jekyll:serve' ]);
  grunt.registerTask('default', ['jekyll:serve']);

};
