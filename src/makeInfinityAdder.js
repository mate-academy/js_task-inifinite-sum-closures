'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (a) => {
    if (!a && a !== 0) {
      const result = sum;

      sum = 0;

      return result;
    }
    sum += a;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
