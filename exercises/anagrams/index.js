// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// First build the helper function to transform the given string into and CharMap

function anagrams (stringA, stringB) {
  // comparing both the strings strictly call the helper function
  return cleanString(stringA) === cleanString(stringB)
}

// Helper func to remove the white space and all punctuations --> replace(/[^\w]/g, '') split sort join
function cleanString (str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('')
}

module.exports = anagrams

/// ////////////////////////////////
// function anagrams (stringA, stringB) {
//   // call char map inside the anagrams func to create charmap of stringA and stringB
//   const aCharMap = buildCharMap(stringA)
//   const bCharMap = buildCharMap(stringB)

//   // check the length of the charMap obj and check its length and compare

//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false
//   }

//   // loop through charmap and check if the values of the key are same
//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false
//     }
//   }

//   return true
// }

// let buildCharMap = str => {
//   const charMap = {}

//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1
//   }
//   return charMap
// }
