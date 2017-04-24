var chai = require('chai');
var expect = require('chai').expect;
var Student = require('../student.js');
var student;
var fname;
var lname;

describe('The Student Object', function() {
  before(function(){
    student = new Student('Jorge', 'Cano');
  });
});
//firstname
  describe('GetFirstName', function() {
    it('should return the first name', function() {
      expect(student.getFirstName()).to.equal('Jorge');
     });
   });
//lastname
  describe('getLastName', function() {
    it('should return the last name', function() {
      expect(student.getLastName()).to.equal('Cano');
     });
   });
//fullname
  describe('getFullName', function() {
    it('should return the Full name', function() {
      expect(student.getFullName()).to.equal('Jorge Cano');
     });
   });
//greating
  describe('getGreeting', function() {
    it('should return the Greeting', function() {
      expect(student.getGreeting()).to.equal('Good day mate, my name is Jorge');
  });
});
