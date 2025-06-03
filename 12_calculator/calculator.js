const add = function(a , b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((accum, current) => accum + current , 0);
};

const multiply = function(arr) {
  return arr.reduce((accum, current) => accum * current);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	// if (a === 0) return 1;
  let result = 1;
  while (a > 0) {
    result *= a;
    a--;
  }
  return result;
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
