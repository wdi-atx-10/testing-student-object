var chai = require('chai');
var expect = chai.expect;

var Student = require('../student');
var student;

describe('Test suite Student methods', function (){//describe what test suite this is running, high level description

  before(function(){
    student = new Student('Ima', 'Developer');
  });

  describe('Methods related to firstName', function (){

    it('should return the first name',function(){
      var firstName = student.getFirstName();
      console.log(firstName);
      expect(firstName).to.equal('Ima');
    });
  });

  describe('Methods related to lastName', function (){
    it('should return the last name',function(){
      var lastName = student.getLastName();
      console.log(lastName);
      expect(lastName).to.equal('Developer');
    });
  });

  describe('Methods related to full name', function (){
    it('should return the full name',function(){
      var fullName = student.getFullName();
      console.log(fullName);
      expect(fullName).to.equal('Ima Developer');
    });
  });

  describe('Methods related to greeting', function (){
    it('should return the greeting',function(){
      var greeting = student.getGreeting();
      console.log(greeting);
      expect(greeting).to.equal('Good day mate, my name is Ima');
    });
  });

//end main describe
});
