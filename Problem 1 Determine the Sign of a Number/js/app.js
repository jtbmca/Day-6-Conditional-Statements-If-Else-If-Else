/**
 * Number Sign Checker
 * This script determines if a number is positive, negative, or zero
 * and displays the result in the console.
 */

// Declare a variable and assign it a numerical value
const number = -5; // You can change this value to test different scenarios

// Implement conditional logic to check the number's sign
if (number > 0) {
  console.log(`${number} is positive.`);
} else if (number < 0) {
  console.log(`${number} is negative.`);
} else {
  console.log(`The number is zero.`);
}