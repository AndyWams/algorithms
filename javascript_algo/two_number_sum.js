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
  console.log(array);
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
