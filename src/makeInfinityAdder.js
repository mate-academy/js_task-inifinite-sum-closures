'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (a) => {
    if (!a) {
      const val = sum;

      sum = 0;

      return val;
    }
    sum += a;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
