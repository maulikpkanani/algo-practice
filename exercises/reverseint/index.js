// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt (n) {
  // Method to use toString()= to convert anything into string, split(), reverse(), join(), and parseInt()

  let reversed = parseInt(
    n
      .toString()
      .split('')
      .reverse()
      .join('')
  )

  // Good use of the Math.sign() function to convert it into negative num
  return reversed * Math.sign(n)
}

module.exports = reverseInt
