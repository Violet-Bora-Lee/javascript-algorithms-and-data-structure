// https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3240/
//
//     Squares of a Sorted Array
//
// Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.
//
//
//
//     Example 1:
//
// Input: [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Example 2:
//
// Input: [-7,-3,2,3,11]
// Output: [4,9,9,49,121]
//
//
// Note:
//
//     1 <= A.length <= 10000
//     -10000 <= A[i] <= 10000
// A is sorted in non-decreasing order.

/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortedSquares = function(A) {
  return A.map(num => Math.pow(Math.abs(num), 2)).sort(compareNumeric);
};

const compareNumeric = (a, b) => {
  if (a > b) return 1;
  if (a === b) return 0;
  if (a < b) return -1;
}
