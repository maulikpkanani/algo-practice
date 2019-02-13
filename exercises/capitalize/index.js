// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize (str) {
  // trick is first capitalize the first letter
  let result = str[0].toUpperCase()

  // iterate through string using for loop and check the conditions
  for (let i = 1; i < str.length; i++) {
    // if the left of the char of the str is space cap the current letter of iteration
    if (str[i - 1] === '') {
      result += str[i].toUpperCase()
      // else add it the natural flow
    } else {
      result += str[i]
    }
  }

  // finally return the results;
  return result
}

module.exports = capitalize

//
// function capitalize (str) {
//   // start off with empty array of obj
//   const words = []

//   // Iterating through array of words ==> not the string because .split on the fly
//   for (let word in str.split(' ')) {
//     // captalize the word and join it to full word using slice
//     words.push(word[0].toUpperCase() + word.slice(1))
//   }

//   // return the words array and join them using join

//   return words.join(' ')
// }
