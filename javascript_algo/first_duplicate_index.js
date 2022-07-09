/*

  Given an array of integers between 1 and n,
  inclusive, where n is the length of the array, write a function
  that returns the first integer that appears more than once (when the array is
  read from left to right).

  In other words, out of all the integers that might occur more than once in the
  input array, your function should return the one whose first duplicate value
  has the minimum index.

  If no integer appears more than once, your function should return
  Note that you're allowed to mutate the input array.

*/

function firstDuplicateValue(array) {
  // Write your code here.
  let set = [];
  for (let i = 0; i < array.length; i++) {
    if (set.includes(array[i])) {
      return array[i];
    } else {
      set.push(array[i]);
    }
  }
  return -1;
}
