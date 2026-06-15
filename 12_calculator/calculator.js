const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce( (sum, acc) => sum + acc, 0);
};

const multiply = function(arr) {
  return arr.reduce((sum, acc) => sum * acc);
};

const power = function(num, pow) {
	return num ** pow;
};

const factorial = function(n) {
  let result = 1;
  for(let i = n; i > 0; i--){
    result *= i;
  }
  return result
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
