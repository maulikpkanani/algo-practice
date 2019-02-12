// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse (str) {
  // using split to split the string and using the reduce helper method to reverse the sting

  return str.split('').reduce((rev, char) => char + rev, '')
}

module.exports = reverse

//
// function reverse (str) {
//   return str
//     .split('')
//     .reverse()
//     .join('')
// }

//
// function reverse (str) {
//   let reversed = ''

//   for (let char of str) {
//     reversed = char + reversed
//     console.log(reversed)
//   }
//   console.log(reversed)
// }
