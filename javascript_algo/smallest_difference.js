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
