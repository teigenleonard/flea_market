module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
<<<<<<< HEAD
=======
    // uglify: {
    //   build: {
    //     src: ['client/scripts/*.js',
    //           'client/scripts/**/*.js'],
    //     dest: 'server/public/scripts/client.min.js'
    //   }
    // },
>>>>>>> 72277fb3f69504d39d61a7d2289ab83be497eb7f
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
>>>>>>> 72277fb3f69504d39d61a7d2289ab83be497eb7f
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['copy', 'watch']);
};
