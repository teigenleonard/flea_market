module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      html: {
        expand: true,
        cwd: 'client/views',
        src: ['index.html'],
        dest: 'server/public/views/'
      },
      css: {
        expand: true,
        cwd: 'client/styles',
        src: ['style.css'],
        dest: 'server/public/styles/'
      },
      bootstrap: {
        expand: true,
        cwd: 'node_modules/bootstrap/dist/',
        src: ['css/bootstrap.css',
              'js/bootstrap.js'],
        dest: 'server/public/vendors/bootstrap/'
      },
      angular: {
        expand: true,
        cwd: 'node_modules/angular/',
        src: ['angular.js',
              'angular.min.js',
              'angular.min.js.map'],
        dest: 'server/public/vendors/angular/'
      }
    },
    watch: {
      files: [
        'client/**/*.*',
        'client/**/**/*.*'
      ],
      tasks: ['copy']
    }
  });

<<<<<<< HEAD
=======
  // grunt.loadNpmTasks('grunt-contrib-uglify');

>>>>>>> b0f03175b0b28807d6ec9145c6342bc86ffe5077
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['copy', 'watch']);
};
