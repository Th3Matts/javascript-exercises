const palindromes = function (string) {
  const palindrome = string.toLowerCase()
  .split('')
  .filter( alpha =>  alpha.match(/[a-z0-9]/) )
  .join('');

  const reversed = palindrome.split('').reversed().join('');
  
  return palindrome === reversed;
};

// Do not edit below this line
module.exports = palindromes;