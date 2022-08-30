//? Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

//? Symbol       Value
//? I             1
//? V             5
//? X             10
//? L             50
//? C             100
//? D             500
//? M             1000
//? For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

//? Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

//? I can be placed before V (5) and X (10) to make 4 and 9.
//? X can be placed before L (50) and C (100) to make 40 and 90.
//? C can be placed before D (500) and M (1000) to make 400 and 900.
//? Given a roman numeral, convert it to an integer.

//* Example 1:
//* Input: s = "III"
//* Output: 3
//* Explanation: III = 3.

//* Example 2:
//* Input: s = "LVIII"
//* Output: 58
//* Explanation: L = 50, V= 5, III = 3.

//* Example 3:
//* Input: s = "MCMXCIV"
//* Output: 1994
//* Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

//? Symbol       Value
//? I             1
//? V             5
//? X             10
//? L             50
//? C             100
//? D             500
//? M             1000

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let mas1 = s.split('');
  const numbers = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  const keys = Object.keys(numbers);
  const values = Object.values(numbers);
  let number = 0;

  for (let i = 0; i < mas1.length; i++) {
    let idx = keys.indexOf(mas1[i]);

    if (mas1[i] === 'I' && mas1[i + 1] === 'V') {
      number += -1;
    } else if (mas1[i] === 'I' && mas1[i + 1] === 'X') {
      number += -1;
    } else if (mas1[i] === 'X' && mas1[i + 1] === 'L') {
      number += -10;
    } else if (mas1[i] === 'X' && mas1[i + 1] === 'C') {
      number += -10;
    } else if (mas1[i] === 'C' && mas1[i + 1] === 'D') {
      number += -100;
    } else if (mas1[i] === 'C' && mas1[i + 1] === 'M') {
      number += -100;
    } else {
      number += values[idx];
    }
  }

  return number;
};

console.log(romanToInt('III'));
//3
console.log(romanToInt('LVIII'));
//58
console.log(romanToInt('MCMXCIV'));
//1994
console.log(romanToInt('MMXXIII'));
//2023
console.log(romanToInt('MMMMMCMXCIX'));
// 5999
console.log(romanToInt('MCCCXXV'));
//1325
console.log(romanToInt('LII'));
//52
console.log(romanToInt('MCDXLIV'));
//1444
console.log(romanToInt('MCMXCIX'));
//1999
