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
