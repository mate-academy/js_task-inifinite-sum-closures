'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let count = 0;
  const adder = (x) => {
    if (x === undefined) {
      const currentSum = count;

      count = 0;

      return currentSum;
    };
    count += x;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
