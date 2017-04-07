var chai = require('chai');
var expect = chai.expect;

var Student = require('../student');
var student;
var fname;
var lname;

describe('Test Suite for Student Function', function() {
  before(function() {
    fname = 'Jack';
    lname = 'Johnson';
    student = new Student(fname, lname);
  });

  //first name
  it('Should return the first name', function() {
    var firstName = student.getFirstName();

    expect(firstName).to.equal('Jack');
  });

//last name
  it('Should return the last name', function() {
    var lastName = student.getLastName();

    expect(lastName).to.equal('Johnson');
  });

  //full name
  it('Should return the full name', function() {
    var fullName = student.getFullName();

    expect(fullName).to.equal('Jack Johnson');
  });

  //greeting
  it('Should return the greeting with first name', function() {
    var greeting = student.getGreeting();

    expect(greeting).to.equal('Good day mate, my name is Jack');
  });

  //last name default
    it('Should return the default last name', function() {
      student = new Student(fname);
      var lastName = student.getLastName();

      expect(lastName).to.equal('Doe');
    });

});
