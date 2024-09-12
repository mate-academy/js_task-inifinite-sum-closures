'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = (...args) => {
    if (args.length === 0) {
      const totalSum = sum;

      sum = 0;

      return totalSum;
    }

    sum += args.reduce((total, elem) => total + elem);

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
