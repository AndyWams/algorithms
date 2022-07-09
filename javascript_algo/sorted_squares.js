/*
  Write a function that takes in a non-empty array of integers that are sorted
  in ascending order and returns a new array of the same length with the squares
  of the original integers also sorted in ascending order.
*/

//Sample output array =  = [1, 2, 3, 5, 6, 8, 9]

function sortedSquaredArray(array) {
  // Write your code here.

  return array.map((x) => x * x).sort((a, b) => a - b);
}
