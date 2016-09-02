/* global chai, describe, it, xit, expect, before, after, beforeEach, afterEach, oldEnoughToDrink, sameLength, bouncer, max, min, larger, smaller, even, odd, positive, negative, randInt, guessMyNumber, scoreToGrade */
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



// Please write tests for all W1D2 exercises below (https://github.com/mmeigooni/rp-w1d2)

/* BOOLEAN CONDITIONALS */

describe('booleans-conditionals.js', function () {
  describe('oldEnoughToDrink()', function () {
    it('should return false for someone under 21', function () {
      var result = oldEnoughToDrink(20);
      expect(result).to.be.false;
    });

    it('should return true for someone 21 or older', function () {
      var result = oldEnoughToDrink(35);
      expect(result).to.be.true;
      result = oldEnoughToDrink(21);
      expect(result).to.be.true;
    });
  });

  describe('sameLength()', function () {
    it('should return false for strings of different length', function () {
      var result = sameLength('rabbit', 'goat');
      expect(result).to.be.false;
    });

    it('should return true for strings of the same length', function () {
      var result = sameLength('rabbit', 'chicks');
      expect(result).to.be.true;
    });
  });

  describe('bouncer()', function () {
    it('should turn someone away if they are not 21 or older', function () {
      var result = bouncer('Timmy', 12);
      expect(result).to.contain('Go home');
    });

    it('should accept someone if they are 21 or older', function () {
      var result = bouncer('Bond', 35);
      expect(result).to.contain('Welcome');
    });

    it('should mention the customer by name', function () {
      var result = bouncer('Timmy', 12);
      expect(result).to.contain('Timmy');
      result = bouncer('Bond', 35);
      expect(result).to.contain('Bond');
    });
  });

  describe('max()', function () {
    it('should return the higher number', function () {
      var result = max(30, 38);
      expect(result).to.equal(38);
      result = max(400, 69);
      expect(result).to.equal(400);
    });
  });

  describe('min()', function () {
    it('should return the lower number', function () {
      var result = min(30, 38);
      expect(result).to.equal(30);
      result = min(400, 69);
      expect(result).to.equal(69);
    });
  });

  describe('larger()', function () {
    it('should return the longer string', function () {
      var result = larger('Ryo', 'Forrest');
      expect(result).to.equal('Forrest');
      result = larger('Muhammad', 'Leo');
      expect(result).to.equal('Muhammad');
    });
  });

  describe('smaller()', function () {
    it('should return the shorter string', function () {
      var result = smaller('Ryo', 'Forrest');
      expect(result).to.equal('Ryo');
      result = smaller('Muhammad', 'Leo');
      expect(result).to.equal('Leo');
    });
  });

  describe('even()', function () {
    it('should return false if the number is not even', function () {
      var result = even(13);
      expect(result).to.be.false;
    });

    it('should return true if the number is even', function () {
      var result = even(24);
      expect(result).to.be.true;
    });
  });

  describe('odd()', function () {
    it('should return false if the number is not odd', function () {
      var result = odd(28);
      expect(result).to.be.false;
    });

    it('should return true if the number is odd', function () {
      var result = odd(3);
      expect(result).to.be.true;
    });
  });

  describe('positive()', function () {
    it('should return false if the number is not positive', function () {
      var result = positive(-30);
      expect(result).to.be.false;
    });

    it('should return true if the number is positive', function () {
      var result = positive(30);
      expect(result).to.be.true;
    });
  });

  describe('negative()', function () {
    it('should return false if the number is not negative', function () {
      var result = negative(99);
      expect(result).to.be.false;
    });

    it('should return true if the number is negative', function () {
      var result = negative(-99);
      expect(result).to.be.true;
    });
  });

  describe('randInt()', function () {
    it('should return a random number between 0 and n', function () {
      var result = randInt(10);
      expect(result).to.be.below(11).and.be.above(-1);
      result = randInt(10);
      expect(result).to.be.below(11).and.be.above(-1);
      result = randInt(10);
      expect(result).to.be.below(11).and.be.above(-1);
    });
  });

  describe('guessMyNumber()', function () {
    beforeEach(function () {
      window.localStorage.MATH_RANDOM_HOLDER = Math.random;
      Math.random = function () {
        return 1;
      }
    });

    afterEach(function () {
      Math.random = window.localStorage.MATH_RANDOM_HOLDER;
      delete window.localStorage.MATH_RANDOM_HOLDER;
    });

    it('should tell you if you got it wrong', function () {
      var result = guessMyNumber(3);
      expect(result).to.equal('Nope! That wasn\'t it!');
    });

    it('should tell you if you got it right', function () {
      var result = guessMyNumber(5);
      expect(result).to.equal('You guessed my number!');
    });
  });
});
