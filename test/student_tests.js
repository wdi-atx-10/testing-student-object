var chai = require('chai');
var expect = chai.expect;
var Student = require('../student');
var stud = new Student('Dan','Doherty');

describe('Finds Student name', function(){

	describe('Finds first name',function(){
		it('should find first name', function(){
			var firstName = stud.getFirstName();
			expect(firstName).to.equal('Dan');
		});
	});

	describe('Finds last name',function(){
		it('should find last name', function(){
			var lastName = stud.getLastName();
			expect(lastName).to.equal('Doherty');
		});
	});

	describe('Finds full name',function(){
		it('should find full name', function(){
			var fullName = stud.getFullName();
			expect(fullName).to.equal('Dan' + '' + 'Doherty');
		});
	});

	
	describe('Find greeting and name',function(){
		it('should find greeting and name', function(){
			var greetingAndName = stud.getGreeting();
			expect(greetingAndName).to.equal('Good day mate, my name is ' + 'Dan' + '' + 'Doherty');
		});
	});

});

