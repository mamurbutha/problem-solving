const expect = require('chai').expect;
const { changeRepresentationNumbers } = require('../src/5.changeRepresentationNumbers');
describe('Change representation of numbers', function() {
  describe('it should represent numbers as per instruction', function() {
    it('it should represent numbers as per instruction', function() {
        expect(changeRepresentationNumbers([40, 20, 50, 10, 100, 50, 7], {20: 'TWENTY', 50: 'FIFTY'}))
            .ordered.eql([40, 'TWENTY', 'FIFTY', 10, 100, 'FIFTY', 7]);
    });
  });
});
////