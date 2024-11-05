const isAdult = (age) => {
  if (age >= 18) {
    return 'adult'
  } else {
    return 'minor'
  }
}

console.log('Exercise 2 Result:', isAdult(6))
