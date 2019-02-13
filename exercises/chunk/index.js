// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk (array, size) {
  // create an empty array
  const chunked = []

  // let index =0;
  let index = 0
  // using while loop untill index is less than the length of array
  while (index < array.length) {
    // push with the slice of the index + size
    chunked.push(array.slice(index, index + size))
    // for not infinite while loop have to specify the index with proper value
    index += size
  }
  // compulsory have to return the chunked array to execute the func
  return chunked
}
module.exports = chunk

/// ////////////////////
// function chunk (array, size) {
//   // create the empty array;
//   let chunked = []

//   // Iterate over the given array - using for...of
//   for (let elem of array) {
//     // create the last element of the chunked array
//     let last = chunked[chunked.length - 1]

//     // check if last doesnot exist and the size of last is of given size
//     if (!last || last.length === size) {
//       // if so then push mini array with the elem into the chunked array
//       chunked.push([elem])

//       // if there is last but the size of the last is not of the given size = argument
//     } else {
//       // then push the elem into the last chunk
//       last.push(elem)
//     }
//   }

//   // Finally return the chunked array
//   return chunked
// }
