module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    nodeunit : {
      all : ['test/test.js']
    },
    jshint: {
      files: [
        "tasks/bumppom.js",
        "Gruntfile.js"
      ],
      options: {
        indent : 2,
        white : false,
        passfail: true
      }
    },
    bumppom : {
      options : {
        files : [
          'test/inc/pom.xml'
        ],
        backup : true,
        bump_from_pom : true,
        bump_from_package : false
      }
    },
    shell: {
      build_changelog: {
        command: 'changelog.sh'
      }
    },
    watch: {
      files: [
        "tasks/bumppom.js"
      ],
      tasks: ['jshint', 'verb'],
      options : {
        debounceDelay: 2000,
        spawn : false
      }
    },
    bump : {
      options : {
        files : ['package.json'],
        updateConfigs : ['pkg'],
        commit : false,
        createTag : false,
        push : false
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-verb');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-bump');
  grunt.loadNpmTasks('grunt-shell');

  grunt.loadTasks('tasks');

  grunt.registerTask('test', ['jshint', 'nodeunit']);

  grunt.registerTask('default', ['watch']);

  grunt.registerTask('readme', ['shell:build_changelog','verb']);

  grunt.registerTask('build-patch', function(){

    grunt.task.run('bump-only:patch');
    grunt.task.run('readme');




  });

  grunt.registerTask('build-prerelease', function(){

    grunt.task.run('bump-only:prerelease');
    grunt.task.run('readme');




  });


  grunt.registerTask('compile', ['jshint', 'nodeunit'] );



};
