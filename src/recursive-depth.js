/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {

    let result = 0;

    if (!Array.isArray(arr)) {
      return 0;
    } else {
      for (let element of arr)
        result = Math.max(result, this.calculateDepth(element));

      return 1 + result;
    }
  }
}

module.exports = {
  DepthCalculator
};
