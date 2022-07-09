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
