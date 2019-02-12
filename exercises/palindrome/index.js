// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome (str) {
  // It is a tricky solution becoz we compare from start and also the last char
  // just remember every give only the boolean value and it is also some kind of iteration .

  return str.split('').every((char, i) => {
    return char === str[str.length - 1 - i]
  })
}

module.exports = palindrome

// function palindrome (str) {
//   // use split('') reverse() and join to reverse the given string
//   const reversed = str
//     .split('')
//     .reverse()
//     .join('')

//   // now you have to compare it with the strict equality
//   return str === reversed
// }
