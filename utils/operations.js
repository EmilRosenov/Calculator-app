const add = (num1, num2) => {
  return num1 + num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const divide = (num1, num2) => {
  if (num1 === 0 || num2 === 0) {
    console.log("Error: Cannot divide by zero.");
    rl.close();
    return;
  } else {
    return num1 / num2;
  }
};

const operations = {
  add,
  subtract,
  divide,
  multiply,
};

export default operations;
