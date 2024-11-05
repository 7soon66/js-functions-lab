// excrsise 1
const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x
  } else {
    return y
  }
}

console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9))

// excersie 2
const isAdult = (age) => {
  if (age >= 18) {
    return 'adult'
  } else {
    return 'minor'
  }
}

console.log('Exercise 2 Result:', isAdult(6))

// excersise 3
const isCharAVowl = (vowl) => {
  if (
    vowl === 'a' ||
    vowl === 'e' ||
    vowl === 'i' ||
    vowl === 'o' ||
    vowl === 'u'
  ) {
    return 'true'
  } else {
    return 'false'
  }
}

console.log('Exercise 3 Result:', isCharAVowl('b'))

/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

const generateEmail = (name, domain) => {
  return name + domain
}

console.log('Exercise 4 Result:', generateEmail('johnsmith', 'example.com'))

/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

const greetUser = (name, timeOfDay) => {
  return 'Good' + ' ' + timeOfDay + ', ' + name
}

console.log('Exercise 5 Result:', greetUser('Sam', 'morning'))

/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/
const maxOfThree = (num1, num2, num3) => {
  if (num1 > num2 && num1 > num3) {
    return num1
  } else if (num2 > num1 && num2 > num3) {
    return num2
  } else if (num3 > num1 && num3 > num2) {
    return num3
  }
}

console.log('Exercise 6 Result:', maxOfThree(17, 30, 12))

/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

const calculateTip = (billAmount, tepPercantige) => {
  return billAmount % tepPercantige
}

console.log('Exercise 7 Result:', calculateTip(50, 20))

/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/

const convertTemperature = (temperature, scaleOfTempreture) => {
  if (scaleOfTempreture == 'c') {
    return temperature * 2.8
  } else if (scaleOfTempreture == 'f') {
    return temperature * 1
  } else {
    return 'please enter a c or f'
  }
}
console.log('Exercise 8 Result:', convertTemperature(32, 'f'))

/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/

const basicCalculator = (num1, num2, operation) => {
  if (num1 > 0 || num2 > 0 || operation == 'add') {
    return num1 + num2
  } else if (num1 > 0 || num2 > 0 || operation == 'substract') {
    return num1 - num2
  } else if (num1 > 0 || num2 > 0 || operation == 'multiply') {
    return num1 * num2
  } else if (num1 > 0 || num2 > 0 || operation == 'divide') {
    return num1 / num2
  } else {
    console.log('error')
  }
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, 'subtract'))

/*
Exercise 10: calculateGrade()

Define a function called calculateGrade. 
It should take a numerical score and return the corresponding letter 
grade (A, B, C, D, F). 

For example, 90 and above yields an 'A', 80-89 is a 'B', 
and 70-79 is a 'C', 60-69 is a 'D' and anything lower than a 60 is an 'F'.

Example: calculateGrade(100) should return A.

Complete the exercise in the space below:
*/
const calculateGrade = (grade) => {
  if (grade >= 90 && grade <= 100) {
    return 'A'
  } else if (grade <= 89 && grade >= 80) {
    return 'B'
  } else if (grade <= 79 && grade >= 70) {
    return 'C'
  } else if (grade <= 69 && grade >= 60) {
    return 'D'
  } else if (grade < 60) {
    return 'F'
  } else {
    return 'you enter a wrong value'
  }
}

console.log('Exercise 10 Result:', calculateGrade(90))

/*
Exercise 11: createUsername()

Define a function called createUsername. 
It should take a first name and a last name and return a username. 

The username should be a combination of the following:
- The first three letters of the first name.
- The first three letters of the last name.
- The total character count of the first and last name combined.

Example: createUsername('Samantha', 'Green') should return 'SamGre13'.

Complete the exercise in the space below:
*/

const createUsername = (firstName, lastName) => {
  let count = (firstName + lastName).length
  let fname = ''
  let lname = ''
  let count1 = ''
  console.log(count)
  for (i = 0; i < 3; i++) {
    fname = fname + firstName[i]
  }

  for (i = 0; i < 3; i++) {
    lname = lname + lastName[i]
  }
  count1 = fname + lname
  return count1 + count
}

console.log('Exercise 11 Result:', createUsername('Samantha', 'Green'))
