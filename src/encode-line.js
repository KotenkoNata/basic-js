/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {

  let result = '';

  for (let i = 0; i < str.length; i++) {
    let count = 0;
    let a = str[i];

    for (let j = i; j < str.length; j++) {
      if (a === str[j]) {
        count += 1;
        if (j === str.length - 1) {
          i = j;
        }
      } else {
        if (count > 1) {
          result = result + count + a;
        } else {
          result += a;
        }
        count = 0
        i = j - 1;
        break;
      }
    }
    if (count > 1) {
      result = result + count + a;
    } else if (count === 1) {
      result += a;
    }
  }

  return result;
}

// console.log(encodeLine("aabbbc"))
//2a3bc

// console.log(encodeLine('aaaatttt'))
//a2b2ca


module.exports = {
  encodeLine
};
