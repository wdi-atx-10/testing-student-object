# Testing a Student Object

Using what we learned today with [Mocha](https://mochajs.org/) and [Chai](http://chaijs.com/), let's develop some tests for `student` objects. 

Here's the code we just wrote and want to test: 

```js
// student.js
function Student(firstName, lastName) {
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

Student.prototype.getGreeting = function() {
  return 'Hello, my name is ' + this.firstName;
}

module.exports = Student;
```
