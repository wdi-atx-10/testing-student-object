var chai = require('chai');
var expect = chai.expect;

var Student = require('../student')
var student;

describe('Student Test Suite', function() {
  before(function() {
    student = new Student('Ima', 'Dev');
  });

  describe('Methods related to obtaining student first name', function() {
    it('Should return the first name', function() {
      var firstName  = student.getFirstName();

      expect(firstName).to.equal('Ima');
    });
  });
});

describe('Methods related to getting last name', function() {
  before(function() {
    student = new Student('Ida', 'Ho');
  });

  describe('obtaining student last name', function() {
    it('Should return the last name', function() {
      var lastName = student.getLastName();

      expect(lastName).to.equal('Ho');
    });
  });
});

describe('Methods related to combining name', function() {
  before(function() {
    student = new Student('Harry', 'Bach');
  });

  describe('obtaining student full name', function() {
    it('Should return the full name', function() {
      var fullName = student.getFullName();

      expect(fullName).to.equal('Harry Bach');
    });
  });
});

describe('Methods related to greeting', function() {
  before(function() {
    student = new Student('Ida', 'Ho');
  });

  describe('obtaining student last name', function() {
    it('Should return the last name', function() {
      var lastName = student.getLastName();

      expect(lastName).to.equal('Ho');
    });
  });
});
