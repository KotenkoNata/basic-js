const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  n = n.split('-');

  let result = false;

  let firstNumber = '';
  let secondNumber = '';

  for(let i=0; i<n.length; i++){
    if(i<3){
      if(n[i]==="00"){
        continue;
      }
      firstNumber = firstNumber+n[i];
    }else{
      secondNumber = secondNumber+n[i];
    }
  }

  let a = parseInt(firstNumber,16);
  let b = parseInt(secondNumber,16);

  if(a.toString(16) === firstNumber.toLowerCase() && b.toString(16) === secondNumber.toLowerCase()){
    result = true;
  }
  return result;
}

// console.log(isMAC48Address("00-1B-63-84-45-E6"))
module.exports = {
  isMAC48Address
};
