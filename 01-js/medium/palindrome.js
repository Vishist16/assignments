/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const strLower = str.toLowerCase();
  const filteredStr = strLower.replace(/[^\w]/g, '');
  const reversedStr = filteredStr.split('').reverse().join('');
  return filteredStr === reversedStr;
}

module.exports = isPalindrome;
