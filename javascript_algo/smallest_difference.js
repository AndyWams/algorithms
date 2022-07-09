/* 
 Write a function that takes in two non-empty arrays of integers, finds the
  pair of numbers (one from each array) whose absolute difference is closest to
  zero, and returns an array containing these two numbers, with the number from
  the first array in the first position.

  Note that the absolute difference of two integers is the distance between
  them on the real number line. For example, the absolute difference of -5 and 5
  is 10, and the absolute difference of -5 and -4 is 1.

  You can assume that there will only be one pair of numbers with the smallest
  difference.

*/

function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  arrayOne.sort((a, b) => {
    return a - b;
  });
  arrayTwo.sort((a, b) => {
    return a - b;
  });
  let pt1 = 0;
  let pt2 = 0;
  let smallest = parseFloat(1 / 0);
  let current = parseFloat(1 / 0);
  let smallestPair = [];
  while (pt1 < arrayOne.length && pt2 < arrayTwo.length) {
    let firstNum = arrayOne[pt1];
    let secondNum = arrayTwo[pt2];
    if (firstNum < secondNum) {
      current = secondNum - firstNum;
    } else if (secondNum < firstNum) {
      pt2++;
    } else if (secondNum == firstNum) {
      return [firstNum, secondNum];
    }
    if (smallest > current) {
      smallest = current;
      smallestPair = [firstNum, secondNum];
    }
  }
  return smallestPair;
}
