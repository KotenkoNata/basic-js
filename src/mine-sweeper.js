const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  function count(data, i, j) {
    let count = 0;

    const prevRow = data[i-1];
    const currentRow = data[i];
    const nextRow = data[i+1];

    [prevRow, currentRow, nextRow].forEach(row=>{
      if(row){
        if (row[j - 1] === true) count++;
        if (row[j] === true) count++;
        if (row[j + 1] === true) count++;
      }
    })
    return count;
  }

  function update(data) {
    return data.map((row, i) => {
      return row.map((row, j) => {
        return row === true ? 1 : count(data, i, j)
      })
    })
  }

  return update(matrix);
}

matrix = [
  [true, false, false],
  [false, true, false],
  [false, false, false]
]

console.log(minesweeper(matrix));

module.exports = {
  minesweeper
};
