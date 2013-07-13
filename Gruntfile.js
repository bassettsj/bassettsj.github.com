'use strict';
module.exports = function (grunt) {
  grunt.initConfig({
    //load the package.json for files
    pkg: grunt.file.readJSON('package.json'),
    recess: {
      dist:{
        options: {
            compile: true
        },
        files: {
             'css/global.css'  : ['_less/global.less']
        },
      },
    },
    watch: {
      less: {
        files: "_less/**.less",
        tasks: "recess:dist",
      }

    },
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
    copy: {
      fontAwesome: {
        src: '_font_awesome/font/*',
        dest: 'font/',
        expand: true,
        flatten: true,
      }
    }


  });

  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTassk('grunt-contrib-uglify');


  //grunt.registerTask('default',  ['copy:fontAwesome','recess', 'jekyll:serve' ]);
  grunt.registerTask('jekll-serve', ['jekyll:serve']);

};
