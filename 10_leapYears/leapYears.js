const leapYears = function(year) {
  /*
  Leap Year rules: if a year is divisible by 4 or if is a century and
   is divisible by 400 that year is a leap year.
  */
  const isCentury = year % 100 === 0;

  const divisibleByFourHundred = year % 400 === 0;

  if(isCentury) return divisibleByFourHundred;
  
  return year % 4 === 0
};

// Do not edit below this line
module.exports = leapYears;
