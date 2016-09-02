/* global chai, describe, it, xit, expect, before, after, beforeEach, afterEach, oldEnoughToDrink, sameLength, bouncer, max, min, larger, smaller, even, odd, positive, negative, randInt, guessMyNumber, scoreToGrade, letterGrade, or, and, cube, lhs, rhs */


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

describe('warmup12.js', function () {
  describe('cube()', function () {
    before(function () {
      dontCheatOn(cube);
    });

    it('should return a cubed number with no errors', function () {
      var result = cube(2);
      expect(result).to.equal(4);
      result = cube(result);
      expect(result).to.equal(16);
      result = cube(result);
      expect(result).to.equal(256);
    });
  });

  describe('lhs() && rhs()', function () {
    it('should evaluate the left hand side properly', function () {
      var result = lhs(1, 1);
      expect(result).to.equal(0);
      result = lhs(2, 3);
      expect(result).to.equal(6);
      result = lhs(10, 20);
      expect(result).to.equal(28);
    });

    it('should evaluate the right hand side properly', function () {
      var result = rhs(1, 1);
      expect(result).to.equal(6);
      result = rhs(2, 3);
      expect(result).to.equal(17);
      result = rhs(10, 20);
      expect(result).to.equal(430);
    });

    xit('use the console to test whether lhs(2, 3) and rhs(2, 3) evaluate to the same thing', function () {});
  });
})

/* BOOLEAN CONDITIONALS */

describe('booleans-conditionals.js', function () {
  describe('oldEnoughToDrink()', function () {
    beforeEach(function () {
      dontCheatOn(oldEnoughToDrink);
    });

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
    beforeEach(function () {
      dontCheatOn(sameLength);
    });

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
    beforeEach(function () {
      dontCheatOn(bouncer);
    });

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
    beforeEach(function () {
      dontCheatOn(max);
    });

    it('should return the higher number', function () {
      var result = max(30, 38);
      expect(result).to.equal(38);
      result = max(400, 69);
      expect(result).to.equal(400);
    });
  });

  describe('min()', function () {
    beforeEach(function () {
      dontCheatOn(min);
    });

    it('should return the lower number', function () {
      var result = min(30, 38);
      expect(result).to.equal(30);
      result = min(400, 69);
      expect(result).to.equal(69);
    });
  });

  describe('larger()', function () {
    beforeEach(function () {
      dontCheatOn(larger);
    });

    it('should return the longer string', function () {
      var result = larger('Ryo', 'Forrest');
      expect(result).to.equal('Forrest');
      result = larger('Muhammad', 'Leo');
      expect(result).to.equal('Muhammad');
    });
  });

  describe('smaller()', function () {
    beforeEach(function () {
      dontCheatOn(smaller);
    });

    it('should return the shorter string', function () {
      var result = smaller('Ryo', 'Forrest');
      expect(result).to.equal('Ryo');
      result = smaller('Muhammad', 'Leo');
      expect(result).to.equal('Leo');
    });
  });

  describe('even()', function () {
    beforeEach(function () {
      dontCheatOn(even);
    });

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
    beforeEach(function () {
      dontCheatOn(odd);
    });

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
    beforeEach(function () {
      dontCheatOn(positive);
    });

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
    beforeEach(function () {
      dontCheatOn(negative);
    });

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


/* MORE CONDITIONALS */

describe('more-conditionals.js', function () {
  describe('bouncer()', function () {
    beforeEach(function () {
      dontCheatOn(bouncer);
    });

    it('should reject Joe', function () {
      var result = bouncer('Joe', 39);
      expect(result).to.contain('Go home');
    });

    it('should still function properly for everyone else', function () {
      var result = bouncer('Timmy', 12);
      expect(result).to.contain('Go home');
      result = bouncer('Bond', 35);
      expect(result).to.contain('Welcome');
    });
  });

  describe('scoreToGrade()', function () {
    beforeEach(function () {
      dontCheatOn(scoreToGrade);
    });

    it('should give the correct letter grade', function () {
      var result = scoreToGrade(85);
      expect(result).to.equal('B');
      result = scoreToGrade(39);
      expect(result).to.equal('F');
      if (scoreToGrade(90) === 'A-') {
        result = scoreToGrade(80);
        expect(result).to.equal('B-');
        result = scoreToGrade(60);
        expect(result).to.equal('D-');
      } else {
        result = scoreToGrade(80);
        expect(result).to.equal('B');
        result = scoreToGrade(60);
        expect(result).to.equal('D');
      }
    });

    it('should return "INVALID SCORE" if the score is invalid', function () {
      var result = scoreToGrade(103);
      expect(result).to.equal('INVALID SCORE');
      result = scoreToGrade(-5);
      expect(result).to.equal('INVALID SCORE');
    });
  });

  describe('whatToDoOutside()', function () {
    xit('test this one in your console and make sure it\'s working as expected!', function () {});
  });

  describe('scoreToGrade()', function () {
    beforeEach(function () {
      dontCheatOn(scoreToGrade);
    });

    it('should give the correct letter grade with the addition of +/- where appropriate', function () {
      var result = scoreToGrade(81);
      expect(result).to.equal('B-');
      result = scoreToGrade(99);
      expect(result).to.equal('A+');
    });
  });

  describe('bouncer()', function () {
    beforeEach(function () {
      dontCheatOn(bouncer);
    });

    it('should give a wristband to anyone 18, 19, or 20', function () {
      var result = bouncer('Danny', 19);
      expect(result).to.contain('wristband').or.contain('Wristband');
    });
  });

  describe('letterGrade()', function () {
    beforeEach(function () {
      dontCheatOn(letterGrade);
    });

    it('should return the proper letter grade with appropriate +/-', function () {
      var result = letterGrade('C', 75);
      expect(result).to.equal('C');
      result = letterGrade('D', 68);
      expect(result).to.equal('D+');
      result = letterGrade('F', 30);
      expect(result).to.equal('F');
      result = letterGrade('Z', 198);
      expect(result).to.equal('Z+');
    });
  });

  describe('or()', function () {
    beforeEach(function () {
      dontCheatOn(or);
    });

    it('should return false for two false values', function () {
      var result = or(false, false);
      expect(result).to.be.false;
    });

    it('should return true for two true values', function () {
      var result = or(true, true);
      expect(result).to.be.true;
    });

    it('should return true for one false value and one true value', function () {
      var result = or(true, false);
      expect(result).to.be.true;
      result = or(false, true);
      expect(result).to.be.true;
    });

    it('should not use ||', function () {
      var result = or + '';
      expect(result).to.not.contain('||');
    });
  });

  describe('and()', function () {
    beforeEach(function () {
      dontCheatOn(and);
    });

    it('should return false for two false values', function () {
      var result = and(false, false);
      expect(result).to.be.false;
    });

    it('should return true for two true values', function () {
      var result = and(true, true);
      expect(result).to.be.true;
    });

    it('should return false for one false value and one true value', function () {
      var result = and(true, false);
      expect(result).to.be.false;
      result = and(false, true);
      expect(result).to.be.false;
    });

    it('should not use &&', function () {
      var result = and + '';
      expect(result).to.not.contain('&&');
    });
  });
});
