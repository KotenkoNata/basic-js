// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
      let result = 0;

    for(let i=0; i<=matrix.length-1; i++){

      console.log(matrix[i].length)

  for(let j=0; j <= matrix[i].length-1; j++){

    if(matrix[i][j]==='^^'){

      result=result+1;
    }
  }
    }
  return result;
}

module.exports = {
  countCats
};
