/* 
  Write a function that takes in a non-empty array of distinct integers and an
  integer representing a target sum. If any two numbers in the input array sum
  up to the target sum, the function should return them in an array, in any
  order. If no two numbers sum up to the target sum, the function should return
  an empty array.

  Note that the target sum has to be obtained by summing two different integers
  in the array; you can't add a single integer to itself in order to obtain the
  target sum.

  You can assume that there will be at most one pair of numbers summing up to
  the target sum.

*/

//sample input: [3, 5, -4, 8, 11, 1, -1, 6]
//samplet target: 10

//solution one
function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] == targetSum) {
        return [array[i], array[j]];
      }
    }
  }
  return [];
}

//Solution two
function twoNumberSum(array, targetSum) {
  // Write your code here.
  array.sort((a, b) => {
    return a - b;
  });
  let leftPointer = 0,
    rightPointer = array.length - 1;
  while (leftPointer < rightPointer) {
    let currentSum = array[leftPointer] + array[rightPointer];
    if (currentSum == targetSum) {
      return [array[leftPointer], array[rightPointer]];
    } else if (currentSum < targetSum) {
      leftPointer = leftPointer + 1;
    } else if (currentSum > targetSum) {
      rightPointer = rightPointer - 1;
    }
  }
  return [];
}
