'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (x) => {
    if (!x) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += x;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
