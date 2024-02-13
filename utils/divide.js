export const divide = (num1, num2) => {
  if (num1 === 0 || num2 === 0) {
    console.log("Error: Cannot divide by zero.");
    rl.close();
    return;
  } else {
    return num1 / num2;
  }
};
