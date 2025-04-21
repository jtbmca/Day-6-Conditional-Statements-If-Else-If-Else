// Declare the score variable (can be changed to test different grades)
const score = 85;

// Function to determine letter grade based on score
function getLetterGrade(score) {
  // Input validation for user experience
  if (score < 0 || score > 100 || isNaN(score)) {
    return 'Invalid score. Please enter a number between 0 and 100.';
  }
  
  // Determine the letter grade using conditional logic
  let letterGrade;
  
  if (score >= 90) {
    letterGrade = 'A';
  } else if (score >= 80) {
    letterGrade = 'B';
  } else if (score >= 70) {
    letterGrade = 'C';
  } else if (score >= 60) {
    letterGrade = 'D';
  } else {
    letterGrade = 'F';
  }
  
  return letterGrade;
}

// Get the grade and display it
const grade = getLetterGrade(score);
console.log(`Score: ${score}, Grade: ${grade}`);