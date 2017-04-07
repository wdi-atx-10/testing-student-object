// student.js
function Student(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName || 'Doe';
  this.age = age;
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

Student.prototype.getGreeting = function() {
  return 'Good day mate, my name is ' + this.firstName;
}

module.exports = Student;
