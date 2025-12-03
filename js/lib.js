/**
 * This function must add two numbers and return result of addition
 * @param {number|string} a
 * @param {number|string} b
 * @returns {number}
 */
function sum(a, b) {
  const numA = Number(a);
  const numB = Number(b);
  
  if (isNaN(numA) || isNaN(numB)) {
    throw new TypeError("Parameters must be numbers");
  }
  
  return numA + numB;
}

/**
 * This function must subtraction two numbers and return result of subtraction
 * @param {number|string} a
 * @param {number|string} b
 * @returns {number}
 */
function subtraction(a, b) {
  const numA = Number(a);
  const numB = Number(b);
  
  if (isNaN(numA) || isNaN(numB)) {
    throw new TypeError("Parameters must be numbers");
  }
  
  return numA - numB;
}

/**
 * This function must division two numbers and return result according to all arithmetic rules
 * @param {number|string} a
 * @param {number|string} b
 * @returns {number}
 */
function division(a, b) {
  const numA = Number(a);
  const numB = Number(b);
  
  if (isNaN(numA) || isNaN(numB)) {
    throw new TypeError("Parameters must be numbers");
  }
  
  if (numB === 0) {
    throw new Error("Cannot divide by zero");
  }
  
  return numA / numB;
}

/**
 * This function return result of multiplication two numbers according to all arithmetic rules
 * @param {number|string} a
 * @param {number|string} b
 * @returns {number}
 */
function multiplication(a, b) {
  const numA = Number(a);
  const numB = Number(b);
  
  if (isNaN(numA) || isNaN(numB)) {
    throw new TypeError("Parameters must be numbers");
  }
  
  return numA * numB;
}

/**
 * This function calculate percent from number according to all arithmetic rules
 * @param {number|string} value
 * @param {number|string} percent
 * @returns {number}
 */
function percentage(value, percent) {
  const numValue = Number(value);
  const numPercent = Number(percent);
  
  if (isNaN(numValue) || isNaN(numPercent)) {
    throw new TypeError("Parameters must be numbers");
  }
  
  return (numValue * numPercent) / 100;
}

/**
 * This function return whole part of number
 * @param {number|string} number
 * @returns {number}
 */
function getWholeNumberPart(number) {
  const num = Number(number);
  
  if (isNaN(num)) {
    throw new TypeError("Parameter must be a number");
  }
  
  return Math.trunc(num);
}

/**
 * This function get array of natural number and return array of even number
 * @param {number[]} numbers
 * @returns {number[]}
 */
function getEvenNumbers(numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError("Parameter must be an array");
  }
  
  return numbers.filter(num => num % 2 === 0);
}

/**
 * This function get get Max number from array
 * @param {number[]} numbers
 * @returns {number}
 */
function getMaxNumber(numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError("Parameter must be an array");
  }
  
  if (numbers.length === 0) {
    throw new Error("Array cannot be empty");
  }
  
  return Math.max(...numbers);
}

/**
 * This function return object with min and max number from array
 * @param {number[]} numbers
 * @returns {{min: number, max: number}}
 */
function getMinAndMaxNumbers(numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError("Parameter must be an array");
  }
  
  if (numbers.length === 0) {
    throw new Error("Array cannot be empty");
  }
  
  return {
    min: Math.min(...numbers),
    max: Math.max(...numbers)
  };
}

/**
 * This function calculate arithmetic means from array of numbers
 * @param {number[]} numbers
 * @returns {number}
 */
function arithmeticMeans(numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError("Parameter must be an array");
  }
  
  if (numbers.length === 0) {
    throw new Error("Array cannot be empty");
  }
  
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

/**
 * This function return array of vowels from string
 * @param {string} str
 * @returns {string[]}
 */
function getVowels(str) {
  if (typeof str !== 'string') {
    throw new TypeError("Parameter must be a string");
  }
  
  const vowels = 'aeiouAEIOU';
  return str.split('').filter(char => vowels.includes(char));
}

/**
 * This function get array of string and concat them into one string
 * @param {string[]} str
 * @returns {string}
 */
function cancatString(str) {
  if (!Array.isArray(str)) {
    throw new TypeError("Parameter must be an array");
  }
  
  return str.join('');
}

/**
 * This function split string according to divider
 * @param {string} str
 * @param {string} divider
 * @returns {string[]}
 */
function splitString(str, divider) {
  if (typeof str !== 'string') {
    throw new TypeError("First parameter must be a string");
  }
  
  if (typeof divider !== 'string') {
    throw new TypeError("Second parameter must be a string");
  }
  
  return str.split(divider);
}

/**
 * This function return true if string contains substring
 * @param {string} str
 * @param {string} subStr
 * @returns {boolean}
 */
function hasSubString(str, subStr) {
  if (typeof str !== 'string' || typeof subStr !== 'string') {
    throw new TypeError("Parameters must be strings");
  }
  
  return str.includes(subStr);
}

/**
 * This function return true if char is in lower case
 * @param {string} char
 * @returns {boolean}
 */
function isLowerCase(char) {
  if (typeof char !== 'string') {
    throw new TypeError("Parameter must be a string");
  }
  
  if (char.length !== 1) {
    throw new Error("Parameter must be a single character");
  }
  
  return char === char.toLowerCase() && char !== char.toUpperCase();
}

/**
 * Повертає елемент масиву за індексом.
 * Підтримує негативні індекси та fallback-значення.
 *
 * @param {Array} array - масив.
 * @param {number} index - індекс (може бути негативним).
 * @param {*} fallback - значення, що повернеться, якщо індекс некоректний.
 * @returns {*} елемент масиву або fallback.
 */
function getElement(array, index, fallback = null) {
  if (!Array.isArray(array)) {
    throw new TypeError("Перший параметр має бути масивом");
  }
  if (typeof index !== "number" || Number.isNaN(index)) {
    throw new TypeError("Індекс має бути числом");
  }
  const realIndex = index < 0 ? array.length + index : index;
  if (realIndex < 0 || realIndex >= array.length) {
    return fallback;
  }
  return array[realIndex];
}
/**
 * This function calculate Fibonacci sequence
 * @param n
 * @returns {*|number}
 */
function fibonacci(n) {
  return (n > 2) ? fibonacci(n - 1) + fibonacci(n - 2) : 1;
}

module.exports = {
  sum,
  subtraction,
  division,
  multiplication,
  percentage,
  getWholeNumberPart,
  getEvenNumbers,
  getMaxNumber,
  getMinAndMaxNumbers,
  arithmeticMeans,
  getVowels,
  cancatString,
  splitString,
  hasSubString,
  isLowerCase,
  getElement,
  fibonacci
};
