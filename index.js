/**
 * 
 * @param {Number} a First number to make the operation
 * @param {Number} b Second number to make the operation
 * @returns the sum of a and b
 */
const suma = (a,b) => a+b;

/**
 * 
 * @param {Number} a First number to make the operation
 * @param {Number} b Second number to make the operation
 * @returns the substraction of a and b
 */
const resta = (a,b) => a-b;

/**
 * 
 * @param {Number} a First number to make the operation
 * @param {Number} b Second number to make the operation
 * @returns the multiplication of a and b
 */
const mult = (a,b) => a*b;

/**
 * 
 * @param {Number} a First number to make the operation
 * @param {Number} b Second number to make the operation
 * @returns the division of a and b
 */
const div = (a,b) => a/b;

module.exports = {
  suma,
  resta,
  mult,
  div
}