'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (num) => {
    if (num || num === 0) {
      sum += num;

      return adder;
    } else {
      const reset = sum;

      sum = 0;

      return reset;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
