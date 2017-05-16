var chai = require('chai');
var expect = chai.expect;

var Student = require('../student');



 describe('Test student name', function() {
 before(function() {
     firstName = 'Komal';
     lastName = 'Jadvani';
     student = new Student(firstName, lastName);
   });

   //first name
    it('Should return first name', function() {
     var firstName = student.getFirstName();
     expect(firstName).to.equal('Komal');
    });

  //last name
    it('Should return last name', function() {
      var lastName = student.getLastName();
      expect(lastName).to.equal('Jadvani');
    });

    //full name
    it('Should return full name', function() {
      var fullName = student.getFullName();
      expect(fullName).to.equal('Komal Jadvani');
    });

    //greeting
   it('Should return greeting with first name', function() {
      var greeting = student.getGreeting();
      expect(greeting).to.equal('Good day mate, my name is Mike');
    });


 });
