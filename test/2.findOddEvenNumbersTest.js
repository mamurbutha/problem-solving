const expect = require('chai').expect;
const {findOddNumbers, findEvenNumbers} = require('../src/2.findOddEvenNumbers');
describe('Find odd or even numbers', function() {
  describe('find odd numbers', function() {
    it('should return odd numbers', function() {
      expect(findOddNumbers([4, 2, 5, 1, 100, 33, 44])).to.eql([5, 1, 33])
    });
  });
  describe('find even numbers', function() {
    it('should return even numbers', function() {
      expect(findEvenNumbers([4, 2, 5, 1, 100, 33, 44])).to.eql([4, 2, 100, 44])
    });
  });
});