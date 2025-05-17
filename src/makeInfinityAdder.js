'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let totalSum = 0;

  const adder = (...args) => {
    if (args.length === 0) {
      const result = totalSum;

      totalSum = 0;

      return result;
    } else {
      totalSum += args.reduce((sum, current) => sum + current);

      return adder;
    }
  };

  return adder;
}

module.exports = makeAdder;
