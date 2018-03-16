/*
 * grunt-mjml
 * https://github.com/sajjad/grunt-mjml
 *
 * Copyright (c) 2016 smbeiragh
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');

var mjml = require('mjml');

module.exports = function(grunt) {

  function compile(src, dest){
    var srcContent;
    var res;
    try{
      srcContent = grunt.file.read(src);
      res = mjml(srcContent);
      if (res.errors && res.errors.length) {
        grunt.log.error('error processing file ' + src);
        grunt.fatal(JSON.stringify(res.errors, null, 4));
      } else {
        // write result
        grunt.file.write(dest, res.html);
        // Print a success message.
        grunt.log.writeln('File "' + dest + '" created.');
      }
    } catch(e) {
      grunt.log.error('error processing file ' + src);
      grunt.fatal(e);
    }
  }

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('mjml', 'Grunt integration for mjml, the email template engine', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {

      var isDestFile = path.extname(f.dest)?true:false;

      f.src.filter(function(src){
        return grunt.file.isFile(src);
      }).forEach(function(src){
        // Write the destination file.
        if(!isDestFile) {
          compile(src, path.join( f.dest , path.basename(src)));
        } else {
          compile(src, f.dest);
        }
      });

    });
  });

};
