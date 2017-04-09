var expect = require('chai').expect;
var Student = require('../student.js');


describe('The Student Object', function() {
  before(function(){
    student = new Student('Jon', 'Franchi');
  })
  describe('GetFirstName', function() {
    it('should return the first name', function() {
      expect(student.getFirstName()).to.equal('Jon');
    });
  });
  describe('getLastName', function() {
    it('should return the last name', function() {
      expect(student.getLastName()).to.equal('Franchi');
    });
  });
  describe('getFullName', function() {
    it('should return the Full name', function() {
      expect(student.getFullName()).to.equal('Jon Franchi');
    });
  });
  describe('getGreeting', function() {
    it('should return the Greeting', function() {
      expect(student.getGreeting()).to.equal('Good day mate, my name is Jon');
    });
  });
});


