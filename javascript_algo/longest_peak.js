/*

  You're given an array of integers and an integer. Write a function that moves
  all instances of that integer in the array to the end of the array and returns
  the array.

  The function should perform this in place (i.e., it should mutate the input
  array) and doesn't need to maintain the order of the other integers.

*/

function longestPeak(array) {
  // Write your code here.
  let longestPeak = 0;
  let i = 1;
  let isPeak;
  let leftIdx, rightIdx, currentPeakLength;
  while (i < array.length - 1) {
    isPeak = array[i - 1] < array[i] && array[i] > array[i + 1];
    if (isPeak == false) {
      i++;
    }
    leftIdx = i - 2;
    while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) {
      leftIdx -= 1;
    }
    rightIdx = i + 2;
    while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]) {
      rightIdx += 1;
    }
    currentPeakLength = rightIdx - (leftIdx - 1);
    if (currentPeakLength > longestPeak) {
      longestPeak = currentPeakLength;
    }

    i = rightIdx;
  }
  return longestPeak;
}
