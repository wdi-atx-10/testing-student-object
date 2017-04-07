var chai = require('chai');
var expect = chai.expect;

var Student = require('../student');
var student;

describe('Student Test Suite', function(){
  before(function(){
    student = new Student('Rene', 'Sanchez');
  })

  describe('test student', function(){

    it('should return the first name', function(){
      var firstName = student.getFirstName();
      console.log(student);

      expect(firstName).to.equal('Rene');
    });

    it('should return the last name', function(){
      var lastName = student.getLastName();
      expect(lastName).to.equal('Sanchez');
    });

    it('should return the full name', function(){
      var fullName = student.getFullName();
      expect(fullName).to.equal('Rene Sanchez');
    });

    it('should return the greeting', function(){
      var greeting = student.getGreeting();
      expect(greeting).to.equal('Good day mate, my name is Rene');
    });



  });



});
