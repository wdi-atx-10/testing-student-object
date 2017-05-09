var expect = require('chai').expect
var Student = require('../student.js')


describe('The student object', function(){
  before(function(){
    student = new Student('Cookie', 'Monster');
  });

  describe('getFirstName', function() {
    it('should return the first name', function(){
      expect(student.getFirstName()).to.equal('Cookie');
    });
  });

  describe('getLastName', function(){
    it('should return the last name', function(){
      expect(student.getLastName()).to.equal('Monster');
    });
  });

  describe('getFullName', function(){
    it('should return the Full name', function(){
      expect(student.getFullName()).to.equal('Cookie Monster');
    });
  });

  describe('getGreeting', function(){
    it('should return the greeting', function(){
      expect(student.getGreeting()).to.equal('Good day mate, my name is Cookie');
    });
  });
});






// describe('Test suite for all student object methods', function(){
//   before(function(){
//     console.log('I run before all the tests!');
//     var items = [];
//   });
//   beforeEach(function(){
//     console.log('I run before each test');
//     items = ['John', 'Jane', 'Joe'];
//   });
//   describe('Methods related to adding', function() {
//
//       it('should return the sum', function() {
//         var sum = calculator.add(2,3);
//
//         expect(sum).to.equal(5);
//       });
//     });
//
//
// })
