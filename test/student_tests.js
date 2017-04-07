var chai = require('chai');
var expect = chai.expect;

var Student = require('../student');
var student;

var firstName;
var lastName;


describe('Student test functions', function() {

  before(function() {
    firstName = 'Sanic';
    lastName = 'Hegehog';
    student = new Student(firstName, lastName);
  });

  // getFirstName
  it('should give you first name', function() {
    var fName = student.getFirstName();
    expect(fName).to.equal('Sanic');
  });

  // getLastName
  it('should give you last name', function() {
    var lName = student.getLastName();
    expect(lName).to.equal('Hegehog');
  });

  // getFullName
  it('should tell you who gotta go fast', function() {
    var name = student.getFullName();
    expect(name).to.equal('Sanic Hegehog');
  });

  // getGreeting
  it('should give you a greeting with name', function() {
    var greeting = student.getGreeting();
    expect(greeting).to.equal('Good day mate, my name is Sanic');
  });
});
 
