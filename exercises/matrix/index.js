// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// dont directly start to write the code --> think first and then start to attempt to write the code
function matrix (n) {
  // set results as an empty array
  const results = []
  // to push the array iterate through the arrays and push the empty array
  for (let i = 0; i < n; i++) {
    results.push([])
  }

  // set the initial variables

  let counter = 1
  let startColumn = 0
  let endColumn = n - 1
  let startRow = 0
  let endRow = n - 1

  // while loop to create the matrix
  while (startColumn <= endColumn && startRow <= endRow) {
    // considering the top row
    // Here the empty array in results array are manipulate

    // Top row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter
      counter++
    }
    startRow++

    // Right column

    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter
      counter++
    }
    endColumn--

    // Bottom row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter
      counter++
    }
    endRow--
    // start column

    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter
      counter++
    }
    startColumn++
  }
}

module.exports = matrix
