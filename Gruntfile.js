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


  });

  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');


  //grunt.registerTask('default',  ['copy:fontAwesome','recess', 'jekyll:serve' ]);
  grunt.registerTask('default', ['jekyll:serve']);

};
