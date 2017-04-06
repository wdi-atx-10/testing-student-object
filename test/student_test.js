var chai = require('chai');

var expect = chai.expect;


var Student = require('../student');


describe('student test', function() {
  //beforeEach(function() {

//  });
  describe('cool stuff', function(){

    it('should return Doe', function() {
      var student = new Student('rob', '', 25)

      expect(student.lastName).to.equal('Doe');
    })
    it('range', function() {
      var student = new Student('rob', 'wilson', 25)

      expect(student.age).to.be.above(18);
      expect(student.age).to.be.below(60);
    })
  })
})
