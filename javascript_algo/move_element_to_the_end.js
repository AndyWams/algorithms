/*

  You're given an array of integers and an integer. Write a function that moves
  all instances of that integer in the array to the end of the array and returns
  the array.

  The function should perform this in place (i.e., it should mutate the input
  array) and doesn't need to maintain the order of the other integers.

*/

//sample input array:  = [2, 1, 2, 2, 2, 3, 4, 2]
//tomove = 2

function moveElementToEnd(array, toMove) {
  // Write your code here.
  let i = 0;
  let j = array.length - 1;
  while (i < j) {
    if (array[j] == toMove) {
      j--;
    } else {
      if (array[i] !== toMove) {
        i++;
      } else if (array[i] == toMove && array[j] !== toMove) {
        let t = array[i];
        array[i] = array[j];
        array[j] = t;
        i++;
      } else {
        j--;
      }
    }
  }
  return array;
}
