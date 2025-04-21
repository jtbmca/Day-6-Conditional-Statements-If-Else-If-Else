// Declare a variable for age
const age = 67; // You can change this value to test different scenarios

// Implement conditional logic to check eligibility
function checkSeniorDiscountEligibility(age) {
  if (age >= 65) {
    console.log("Eligible for senior citizen discount.");
    return "Eligible for senior citizen discount.";
  } else {
    console.log("Not eligible for senior citizen discount.");
    return "Not eligible for senior citizen discount.";
  }
}

// Call the function to display the result
checkSeniorDiscountEligibility(age);