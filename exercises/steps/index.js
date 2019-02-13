// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Recursion
// set base step
// set defaults
// solve by calling function again
function steps (n, row = 0, stair = '') {
  // base case
  if (n === row) {
    return
  }
  // output the result
  if (n === stair.length) {
    console.log(stair)

    // increase the row to continue the loop
    return steps(n, row + 1)
  }

  // deciding step
  const add = stair.length <= row ? '#' : ' '
  steps(n, row, stair + add)
}

module.exports = steps

//

// function steps (n) {
//   // think of a matrix rows and column
//   // perfect technique to transform the code into the matrix when only one value is given
//   for (let row = 0; row < n; row++) {
//     let stair = ''
//     debugger

//     // for loop inside a for loop , this loop will run full with only the initial value of the outer loop
//     for (let column = 0; column < n; column++) {
//       // checking the conditions if the inner loop value is less than or equalto the value of the outerloop then you have to add the # .....
//       if (column <= row) {
//         stair += '#'
//         // if not the case you have to add space
//       } else {
//         debugger
//         stair += ' '
//       }
//     }
//     console.log(stair)
//   }
// }

// steps(3)
