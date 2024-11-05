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

console.log('Exercise 10 Result:', calculateGrade(11))
