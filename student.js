// student.js
function Student(age, firstName, lastName = 'Doe') {
  this.age = age;
  this.firstName = firstName;
  this.lastName = lastName;
}

Student.prototype.getFirstName = function() {
  return this.firstName;
}

Student.prototype.getLastName = function() {
  return this.lastName;
}

Student.prototype.getFullName = function() {
  return this.firstName + ' ' + this.lastName;
}

Student.prototype.getAge = function() {
  return this.age;
}

Student.prototype.getGreeting = function() {
  return 'Good day mate, my name is ' + this.fullName;
}

module.exports = Student;
