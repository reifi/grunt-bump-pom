/*jslint node: true */
'use strict';


var execOptions = {
  files : [
    'inc/test_before.txt'
  ],
  backup : true
};

exports.tests = {
  alwaws : function(test){
    test.expect(1);

    test.equal(true, true, "this better work");

    test.done();
  }
};
