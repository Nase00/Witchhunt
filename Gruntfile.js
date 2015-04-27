module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
         files: {
          "client/css/witchhunt.css": "client/css/withhunt.scss"
        }
     },
    },
    uglify: {
      my_target: {
        files: {
          "client/css/witchhunt.min.css": "client/css/witchhunt.css"
        }
      }
    },
    watch: {
      files: ["./client/**/*"],
      tasks: ["sass"],
    },
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks("grunt-contrib-watch");
  // grunt.loadNpmTasks("grunt-react");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.event.on("watch", function(action, filepath, target) {
    grunt.log.writeln(target + ": " + filepath + " has " + action);
  });
};