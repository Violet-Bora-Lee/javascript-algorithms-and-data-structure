// Multiple Pointers - countUniqueValues
// Implement a function called countUniqueValues, which accepts a sorted array,
// and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.

// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4

// Time Complexity - O(n)
// Space Complexity - O(n)

// Bonus
// You must do this with constant or O(1) space and O(n) time.


// my solution && colt's solution
function countUniqueValues(arr) {
  if(arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    console.log(arr)
  }
  return i + 1;
}

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4

// Solution with two pointers (two variables)

function countUniqueValuesWithTwoPointers(arr) {
  if (!arr.length) return 0;
  let counter = 1;

  for (let i = 0, j = 1; j < arr.length; j++, i++) {
    if (arr[i] !== arr[j]) counter++;
  }

  return counter;
}

console.log(countUniqueValuesWithTwoPointers([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValuesWithTwoPointers([-2, -1, -1, 0, 1])); // 4

// Solution with one pointer (one variable)

function countUniqueValuesWithOnePointer(arr) {
  if (!arr.length) return 0;
  let counter = 1;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) counter++;
  }

  return counter;
}

console.log(countUniqueValuesWithOnePointer([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValuesWithOnePointer([-2, -1, -1, 0, 1])); // 4
