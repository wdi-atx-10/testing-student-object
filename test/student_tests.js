var chai = require('chai');
var expect = chai.expect;

var Student = require('../student')
var student;

describe('Student Test Suite', function() {
  before(function() {
    student = new Student(6, 'I. C.', 'Weiner');
  });

  it('Should return the first name', function() {
    var firstName = student.getFirstName();

    expect(firstName).to.equal('I. C.');
  });

  it('Should return the last name', function() {
    var lastName = student.getLastName();

    expect(lastName).to.equal('Weiner');
  });

  it('Should return the full name', function() {
    var fullName = student.getFullName();

    expect(fullName).to.equal('I. C. Weiner');
  });

  it('Should return a friendly greeting', function() {
    var greeting = student.getGreeting();

    expect(greeting).to.equal('Good day mate, my name is I. C. Weiner');
  });

  it('Should default last name to Doe', function () {
    var deer = new Student(22, 'Jane');

    expect(deer.lastName()).to.equal('Doe');
  });

  it('Should have an age', function() {
    var age = student.getAge();

    expect(typeof age).to.be(Number);
  });
});
