const add = function(firstNumber, secondNumber) {
  
  return firstNumber + secondNumber
};

const subtract = function(firstNumber, secondNumber) {
	
  return firstNumber - secondNumber
};

const sum = function(arrayOfNumbers) {

  let sum = 0;
  arrayOfNumbers.forEach((number) => sum += number)
  return sum
};

const multiply = function(arrayOfNumbers) {

  let result = 1;
  arrayOfNumbers.forEach((number) => result *= number)
  return result
};

const power = function(firstNumber, secondNumber) {
	
  return Math.pow(firstNumber, secondNumber)
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
