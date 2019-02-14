// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels (str) {
  const matches = str.match(/[aeiou]/gi)
    return matches? matches.length:0
}

module.exports = vowels

// function vowels (str) {

//   //set the count to 0
// let count = 0;
// //create an upfront array with vowels
// const checker = ['a','e','i','o','u']

// //iterate through the string and check that if it includes the vowels of array
// for(let char of str.toLowerCase()){
//   if(checker.includes(char)){
//     count++
//   }
// }
// return count
// }
