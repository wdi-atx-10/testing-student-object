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
  return 'Good day mate, my name is ' + this.firstName;
}

module.exports = Student;
```

### Create package.json

```
$ npm init
```

Follow the prompts and just use the defaults if you prefer

### Install Mocha and Chai

```
$ npm install mocha --save-dev
$ npm install chai --save-dev
```

### Create the student library file

```
$ touch student.js
```

Paste the code above into this file

### Create the test directory and test file

```
$ mkdir test && cd test
$ touch student_tests.js
```

to test
$ mocha test

Your directory structure should look something like this now:

```
├── node_modules/
├── package.json
├── student.js
└── test/
    └── student_tests.js
```

### Write tests for every method of `Student`

- Use `describe` to explain your tests
- Use either `assert`, `expect`, or `should` for your tests. The choice is yours.

## Challenge

- Modify the `student` object so that if there's no last name passed, it defaults to 'Doe'. Write a new test to ensure that it works as expected.
- Modify the `student` object so that an age can also be passed in. Write tests that ensure it's a valid number and that the value is within a reasonably acceptable range.

## Licensing
All content is licensed under a CC­BY­NC­SA 4.0 license.
All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
