const expect = require('chai').expect;
const {findNumbers} = require('../src/4.findNumbers');
describe('Find numbers', function() {
  describe('find a number', function() {
    it('should find 8', function() {
      expect(findNumbers([1, 5, 8], 8)).to.eql(8)
    });
  });
  describe('find no number', function() {
    it('should not find 7', function() {
        expect(findNumbers([1, 5, 8], 7)).to.eql(undefined)
    });
  });
});