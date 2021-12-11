const assert = require('assert');
const findLargestNumber = require('../src/1.findLargestNumber');
describe('Find largest number', function() {
  describe('find largest among 3', function() {
    it('should return 100 as largest number', function() {
      assert.equal(findLargestNumber([4, 2, 5, 1, 100, 33, 44]), 100);
    });
  });
});