'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  const adder = (x = null) => {
    if (x === null) {
      const res = sum;

      sum = 0;

      return res;
    }
    sum += x;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
