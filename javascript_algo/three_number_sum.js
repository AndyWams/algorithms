/* 

  Write a function that takes in a non-empty array of distinct integers and an
  integer representing a target sum. The function should find all triplets in
  the array that sum up to the target sum and return a two-dimensional array of
  all these triplets. The numbers in each triplet should be ordered in ascending
  order, and the triplets themselves should be ordered in ascending order with
  respect to the numbers they hold.

  If no three numbers sum up to the target sum, the function should return an
  empty array.

*/

//sample input: [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
function threeNumberSum(array, targetSum) {
  array.sort((a, b) => {
    return a - b;
  });

  let leftPointer, rightPointer, currentSum;
  let tripletsArr = [];

  for (let i = 0; i < array.length - 2; i++) {
    leftPointer = i + 1;
    rightPointer = array.length - 1;
    while (leftPointer < rightPointer) {
      currentSum = array[i] + array[leftPointer] + array[rightPointer];
      if (currentSum == targetSum) {
        tripletsArr.push([array[i], array[leftPointer], array[rightPointer]]);
        leftPointer += 1;
        rightPointer -= 1;
      } else if (currentSum < targetSum) {
        leftPointer += 1;
      } else if (currentSum > targetSum) {
        rightPointer -= 1;
      }
    }
  }
  return tripletsArr;
}
