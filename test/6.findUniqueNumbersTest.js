const assert = require('assert');
const findUniqueNumbers = require('../src/6.findUniqueNumbers');
describe('Find unique numbers', function() {
  describe('find 3 unique numbers', function() {
    it('should return unique numbers for given numbers', function() {
      assert.equal(findUniqueNumbers([1, 1, 5, 5 , 10]), [1, 5, 10]);
    });
    it('should return unique numbers for given numbers', function() {
        assert.equal(findUniqueNumbers([9, 1, 4, 9 , 10, 1]), [9, 1, 4, 10, 1]);
    });
  });
});