// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// good use of brain Math Math
function pyramid (n) { 
  // first find out the midpoint
  const midpoint = Math.floor((2 * n - 1) / 2)

  // loop through row
  for (let row = 0; row < n; row++) {
    let level = ''

    // for columns they will be n*2-1
    for (let column = 0; column < 2 * n - 1; column++) {
      // tricky in deciding the range to put the # sign
      if (midpoint - row <= column && midpoint + row >= row) {
        level += '#'
      } else {
        level = ' '
      }
    }
  }
  console.log(level)
}


module.exports = pyramid

// function pyramid (n) {
//   // first find out the midpoint
//   const midpoint = Math.floor((2 * n - 1) / 2)

//   // loop through row
//   for (let row = 0; row < n; row++) {
//     let level = ''

//     // for columns they will be n*2-1
//     for (let column = 0; column < 2 * n - 1; column++) {
//       // tricky in deciding the range to put the # sign
//       if (midpoint - row <= column && midpoint + row >= row) {
//         level += '#'
//       } else {
//         level = ' '
//       }
//     }
//   }
//   console.log(level)
// }