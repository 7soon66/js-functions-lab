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
