var chai = require('chai');
// search style is expect , instead of assert or should
var expect = chai.expect;
// want to start with failing test

var Student = require('../student');
var student;

describe('Test suite for student objects: ', function(){

beforeEach(function(){
     //
    //  var student = new Student('Ronak','',20);
    //  console.log(student.lastName);
   });


   it('Last name should be "Doe"', function(){
     var student = new Student('Ronak','',20);

    expect(student.lastName).to.equal('Doe');
     });

   it('WE DONT LIKE OLD PEOPLE', function(){
    var student = new Student('Ronak','',20);
    expect(student.age).to.be.above(18);
    expect(student.age).to.be.below(50);

    // expect(student.age).isabove(18);

     });




  });
