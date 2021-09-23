/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

    if (!Array.isArray(arr)) {
        throw new Error(`'arr' parameter must be an instance of the Array!`);
    }

    let result = [...arr];

    for (let i = 0; i < result.length; i++) {
        switch (result[i]) {
            case '--double-next':
                if (i < result.length - 1) {
                    const next = result[i + 1];
                    result.splice(i + 1, 0, next);
                }
                continue;
            case '--double-prev':
                if (i > 0) {
                    const prev = result[i - 1];
                    result.splice(i, 0, prev);
                    i++;
                }
                continue;
            case '--discard-prev':
                if (i > 0) {
                    result.splice(i - 1, 1);
                }
                continue;
            case '--discard-next':
                if (i < result.length - 1) {
                    result.splice(i + 1, 1);
                }
                continue;
        }
    }

    const ops = {
        '--double-next': true,
        '--double-prev': true,
        '--discard-prev': true,
        '--discard-next': true,
    }

    result = result.filter(value => !ops[value])

    return result;
}

module.exports = {
  transform
};
