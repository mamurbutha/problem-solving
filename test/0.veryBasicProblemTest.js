const assert = require('assert');
const {objectMutation, copyObject} = require('../src/0.veryBasicProblem');
describe('Should solve basic problems', function() {
  describe('Should do object mutation', function() {
    it('should return zahir as a name for myObject', function() {
        const myObject = {name: 'sabbir'}
        objectMutation(myObject, 'name', 'zahir');
        assert.equal(myObject.name, 'zahir');
    });
  });
  describe('Shouldnot do object mutation', function() {
    it('should copy object as same', function() {
        const myObject = {name: 'sabbir'}
        const copied = copyObject(myObject);

        myObject.name = 'zahir'

        assert.equal(copied.name, 'sabbir');
    });
  });
});