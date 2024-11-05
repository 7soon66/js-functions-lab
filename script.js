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
