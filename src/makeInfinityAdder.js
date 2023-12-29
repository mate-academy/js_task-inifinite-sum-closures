'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  const adder = (...args) => {
    const currentSum = sum;

    if (args.length === 0) {
      sum = 0;

      return currentSum;
    } else {
      sum += args.reduce((accumulator, item) => accumulator + item, 0);
    }

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
