'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (arg) => {
    if (arg === 0) {
      return adder;
    }

    if (arg) {
      sum += arg;
    }

    if (!arg) {
      const result = sum;

      sum = 0;

      return result;
    }

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
