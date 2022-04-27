const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0;

  let columnCount = matrix[0].length;

  for(let line = 0; line < columnCount; line++){

    for(let column = 0; column < matrix.length; column++){

      if(matrix[column][line] === 0){
        break;
      }else{
        result += matrix[column][line];
      }
    }
  }

  return result;
}

matrix = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3]
]

console.log(getMatrixElementsSum(matrix));

module.exports = {
  getMatrixElementsSum
};
