/*
 * grunt-bump-pom
 * https://github.com/phun-ky/grunt-bump-pom
 *
 * Copyright (c) 2014 Alexander Vassbotn Røyne-Helgesen
 * Licensed under the GPL license.
 */

'use strict';

var semver    = require('semver');
var jsxml     = require("node-jsxml");
var fs        = require('fs');
var path      = require('path');

module.exports = function(grunt) {

  // Please see the grunt documentation for more information regarding task and
  // helper creation: https://github.com/cowboy/grunt/blob/master/docs/toc.md
  
  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerTask('bumppom', 'Task to bump pom.xml file', function(release) {
    
    if(release){

      grunt.verbose.writeln("Initalizing bumppom with release: '" + release + "'..")

    } else {

      grunt.verbose.writeln("Initalizing bumppom with no release giving, using 'patch'..");

      release = 'patch';

    }
    
    var options = this.options({
      backup : true,
      bump_from_pom : true,
      bump_from_package : false,
      xmlSettings : {
        ignoreComments                : false,
        ignoreProcessingInstructions  : false,
        createMainDocument            : true,
        //ignoreWhitespace              : false,
        prettyIndent                  : 4
      }
    });

    if(!options.files){

      grunt.fail.fatal("Required 'options.files' is not set!");

    }

    var packageJSON = grunt.file.readJSON('package.json');

    var _version_to_bump;



    var src = grunt.file.expand(options.files).filter(function(filepath){

      // Warn on and remove invalid source files (if nonull was set).
      if (!grunt.file.exists(filepath)) {

        grunt.log.warn('Source file "' + filepath + '" not found.');

        return false;

      } else {

        return true;

      }

    });

    if (src.length === 0) {

      grunt.fail.fatal('Could not find supplied files.. Please check your Gruntfile.');

      return;

    }

    jsxml.XML.setSettings(options.xmlSettings);

    var _total = src.length;
    var _backup_dest = '';

    src.forEach(function(filepath){

      console.log(filepath);

      if(options.backup){

        if(options.backup_dest){

          _backup_dest = path.normalize(options.backup_dest);

        } else {

          _backup_dest = path.dirname(filepath) + path.sep;

        }

        try{

          // Copy file from filepath to dest, append .bak
          fs.writeFileSync( _backup_dest + Date.now() + '_' + path.basename(filepath) + '.bak', fs.readFileSync(filepath));

          grunt.verbose.ok("Copyied file successfully to : '" + _backup_dest + Date.now() + '_' + path.basename(filepath) + '.bak' + "'")

        } catch(ex){

          grunt.fail.warn(ex);
        }

      }

      release     = release || 'patch';
      
      if(
        release === 'major' ||
        release === 'minor' ||
        release === 'patch' ||
        release === 'prerelease' ||
        release === 'copy' ||
        semver.valid(release)
      ){

        var _pom_data           = fs.readFileSync( filepath, 'utf8');
        var _pom_xml_doc        = new jsxml.XML(_pom_data);
        var _pom_version_node   = _pom_xml_doc.child('project').child('version');
        var _pom_version_value  = _pom_version_node.getValue();
        
        if(semver.valid(release)){
          // Bump from given version

          _version_to_bump = release;
          grunt.verbose.writeln("Using given version: '" + _version_to_bump + "'");

          _pom_version_node.setValue( _version_to_bump );
        

        } else if(options.bump_from_package || release === 'copy'){
          // Bump from version in package.json

          _version_to_bump = packageJSON.version;

          if( semver.valid( _version_to_bump ) ){

            grunt.verbose.writeln("Using version from 'package.json': '" + _version_to_bump + "'");
            
            _pom_version_node.setValue((release === 'copy') ? _version_to_bump : semver.inc(_version_to_bump, release));

          } else {

            grunt.fail.fatal("Version in 'package.json': '" + _version_to_bump + "' is NOT valid!");

          }

        } else {
        // Bump from version in given files

          _version_to_bump = _pom_version_value;
          
          if( semver.valid( _version_to_bump ) ){

            grunt.verbose.writeln("Using version from given files: '" + _version_to_bump + "'");

            _pom_version_node.setValue( semver.inc( _version_to_bump, release ) );

          } else {

            grunt.fail.fatal("Version in '" + filepath + "': '" + _version_to_bump + "' is NOT valid!");

          }

        }

        try{

          fs.writeFileSync(filepath, _pom_xml_doc.toXMLString());

        } catch(ex){

          console.log(ex);
          grunt.fail.warn("Could not write '" + filepath + "'!");

        }

        
      } else {

        grunt.fail.fatal('Could not update pom.xml version for release: ' + release + ". Allowed releases are: 'major', 'minor', 'patch', 'prerelase' or a given valid semver version.");

      }

    });
  
  });

}
