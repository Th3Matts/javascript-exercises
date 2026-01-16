function repeatString(str, num){
  let strValue = '' ;
  
  if (num < 0) return strValue = 'ERROR'
  for(let i = 0; i < num; i++){
    strValue += str
  }
  return strValue
}

// Do not edit below this line
module.exports = repeatString;