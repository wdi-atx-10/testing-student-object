# Testing a Student Object

Using what we learned today with [Mocha](https://mochajs.org/) and [Chai](http://chaijs.com/), let's develop some tests for `student` objects. 

Here's the code we've just written and want to test: 

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

### Install Mocha and Chai

```
$ npm install mocha --save-dev
$ npm install chai --save-dev
```

## Challenge 

- Modify the `student` object so that if there's no last name passed, it defaults to 'Doe'. Write a new test to ensure that it works as expected.
- Modify the `student` object so that an age can also be passed in. Write tests that ensure it's a valid number and that the value is within a reasonably acceptable range.
