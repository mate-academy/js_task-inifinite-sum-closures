'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sum = 0;
  const adder = (x) => {
    if (x > 0) {
      sum += x;
    }

    if (x === undefined) {
      const y = sum;

      sum = 0;

      return y;
    }

    return adder;
  };

  return adder;
};

module.exports = makeInfinityAdder;
