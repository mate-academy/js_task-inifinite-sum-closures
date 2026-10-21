'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  return function adder(...args) {
    if (args.length === 0) {
      const currentSum = sum;

      sum = 0;

      return currentSum;
    }

    for (const num of args) {
      sum += num;
    }

    return adder;
  };
}

module.exports = makeAdder;
