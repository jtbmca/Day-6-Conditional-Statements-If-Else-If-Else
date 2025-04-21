// Example: Determining the Sign of a Number

let number = 10; // You can change this value to test different scenarios

if (number > 0) {
  console.log("The number is positive.");
} else if (number < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

// If Statement

// "If the student scores 90 or above, they get an A."

//     This checks a single condition.

let score = 92;

if (score >= 90) {
  console.log('Grade: A');
}


// Else If Statement

// "If the score is 90 or above, it's an A; if it's 80 or above, it's a B; otherwise, it's something else."

//     Allows multiple conditions in sequence.

let score = 85;

if (score >= 90) {
  console.log('Grade: A');
} else if (score >= 80) {
  console.log('Grade: B');
} else if (score >= 70) {
  console.log('Grade: C');
} else if (score >= 60) {
  console.log('Grade: D');
} else {
  console.log('Grade: F');
}

// Nested Conditionals

// "If the student gets an A, check if it's a perfect score for honors."

//     Adds logic within logic.

let score = 95;

if (score >= 90) {
  if (score === 100) {
    console.log('Grade: A+ with Honors');
  } else {
    console.log('Grade: A');
  }
} else {
  console.log('Grade: Below A');
}

// Ternary Operator

// "If the score is 90 or above, assign A; otherwise, assign Not A."

//     A shorthand for if-else.

let score = 88;

let grade = score >= 90 ? 'A' : 'Not A';
console.log(`Grade: ${grade}`);

// Switch Statement

// "Check specific grade ranges to assign a letter grade."

//     Efficient for checking multiple discrete cases.

let grade = 'B';

switch (grade) {
  case 'A':
    console.log('Excellent!');
    break;
  case 'B':
    console.log('Good Job!');
    break;
  case 'C':
    console.log('Needs Improvement.');
    break;
  default:
    console.log('Fail.');
}
