var chai = require('chai');
var expect = chai.expect;

var Student = require('../student');

describe('Student Testing', function () {

  before(function () {
    student = new Student('Erik', 'Morales');
  });

  it('Should return the students first name', function () {
    var firstName = student.getFirstName();
    console.log(firstName);
    expect(firstName).to.equal('Erik');
  });

  it('Should return the students last name', function () {
    var lastName = student.getLastName();
    console.log(lastName);
    expect(lastName).to.equal('Morales');
  });

  it('Should return the students full name', function () {
    var fullName = student.getFullName();
    console.log(fullName);
    expect(fullName).to.equal('Erik Morales');
  });

  it('Should return a greeting', function () {
    var greeting = student.getGreeting();
    console.log(greeting);
    expect(greeting).to.equal('Good day mate, my name is Erik');
  });

});
