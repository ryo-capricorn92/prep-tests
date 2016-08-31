// This file is how TestRunner.html tests your code. You shouldn't 
// need to modify anything here, but you could check out failing 
// tests to see what exactly is expected of your code.

var expect = chai.expect;


// Runs a number of tests to check a function for native methods
var dontCheatOn = function(func) {
  var globals = [
    'Math',
    'Array',
    'String',
    'Object',
    'Date',
    'Number'
  ];

  var methods = [
    '.pop',
    '.push',
    '.shift',
    '.unshift',
    '.join',
    '.reverse',
    '.concat', 
    '.slice',
    '.split',
    '.trim',
    '.replace',
    '.splice',
    '.substring',
    '.substr',
    '.indexOf',
    '.lastIndexOf',
    '.sort',
    '.keys',
    '.values'
  ];

  var pres = [' ','\n','\t','{','[','('];

  var posts = ['.', '('];

  globals.forEach(function(global) {
    pres.forEach(function(pre) {
      posts.forEach(function(post){
        expect(func + '').to.not.contain(pre + global + post, 'Please do these exercises without using native functions.');
      });
    });
  });

  methods.forEach(function(method) {
    expect(func + '').to.not.contain(method, 'Please do these exercises without using native functions.');
  });
};



// Please write tests for all W1D3 exercises below (https://github.com/mmeigooni/rp-w1d3)



