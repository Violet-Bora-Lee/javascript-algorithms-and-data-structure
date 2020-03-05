// Frequency Counter - sameFrequency
// Write a function called sameFrequency.
// Given two positive integers,
// find out if the two numbers have the same frequency of digits.
// Your solution MUST have the following complexities:
// Time: O(N)

// Sample Input:
// sameFrequency(182,281) // true
// sameFrequency(34,14) // fals*
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

// my solution
function sameFrequency(num1, num2){
  const str1 = num1.toString();
  const str2 = num2.toString();

  const obj1 = {};
  const obj2 = {};

  if(str1.length !== str2.length) return false;

  for(let char of str1){
    obj1[char] = (obj1[char] || 0) + 1
  }
  for(let char of str2){
    obj2[char] = (obj2[char] || 0) + 1
  }
  for(let key in obj1) {
    if (key in obj2) {
      if(obj1[key] !== obj2[key]){
        return false;
      }
    } else {
      return false;
    }
    return true;
  }
}

function sameFrequency(num1, num2) {
  const str1 = `${num1}`;
  const str2 = `${num2}`;

  if (str1.length !== str2.length) return false;

  const obj = {};

  for (const char of str1) {
    obj[char] = ++obj[char] || 1;
  }

  for (const char of str2) {
    if (!obj[char]) return false;
    obj[char]--;
  }

  return true;
}

console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
