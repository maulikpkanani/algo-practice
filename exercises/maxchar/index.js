// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// perfect technique to create the objectMap for any string relate q ;

function maxChar (str) {
  // we will start off with the initialization of objMap , max, and maxChar,
  const objMap = {}
  let max = 0
  let maxChar = ''

  // now use for of loop to loop over to the string and create over objMap
  // using for of and if conditions to transform string into ogj :)
  for (let char of str) {
    if (objMap[char]) {
      objMap[char]++
    } else {
      objMap[char] = 1
    }
  }

  // now use for in loop to loop through an object
  for (let key in objMap) {
    // Good use of brain to output the answer
    if (objMap[key] > max) {
      max = objMap[key]
      maxChar = key
    }
  }
  return key
}

module.exports = maxChar
