const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  if (arr.length === 0) return 0
	return arr.reduce( (sum, acc) => sum + acc);
};

const multiply = function(arr) {
  return arr.reduce((sum, acc) => sum * acc);
};

const power = function(num, pow) {
	return num ** pow;
};

const factorial = function(n) {
  let result = 1;
  
  if (n === 0) return result;

  for(let i = 2; i <= n; i++){
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
