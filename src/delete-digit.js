const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {

  n = n.toString().split('').map(a => parseInt(a))

  let result = 0;

  let found = false
  for(let i=0; i < n.length-1; i++){
    let current = n[i];
    let next = n[i+1];

    if(current < next && !found){
      found=true
      continue;
    }
    result = result*10 + current;
  }

  if (found){
    result = result*10 + n[n.length -1];
  }

return result;
}

// console.log(deleteDigit(152))//52

module.exports = {
  deleteDigit
};
