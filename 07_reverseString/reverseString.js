const reverseString = function(str) {
  let reversed = str.split('').reverse().join('')
  return reversed
};

reverseString('hello there')

// Do not edit below this line
module.exports = reverseString;