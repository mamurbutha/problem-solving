const assert = require('assert');
const {findSumOfNumbersForLoop, findSumOfNumbersReduce} = require('../src/3.findSumOfNumbers');
describe('Find sum of the numbers', function() {
  describe('it should show the sum of the numbers', function() {
    it('should return 277 as a sum', function() {
      assert.equal(findSumOfNumbersForLoop([40, 20, 50, 10, 100, 50, 7]), 277);
    });
    it('should return 277 as a sum -2', function() {
        assert.equal(findSumOfNumbersReduce([40, 20, 50, 10, 100, 50, 7]), 277);
      });
  });
});