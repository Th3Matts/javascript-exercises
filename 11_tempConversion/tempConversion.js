const convertToCelsius = function(temp) {
  //Converts Fahrenheit to Celsius
  return +((temp - 32) * (5/9)).toFixed(1); 
};

const convertToFahrenheit = function(temp) {
  //Converts Celsius to Fahrenheit
  return +((temp * 9/5) + 32).toFixed(1); 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
