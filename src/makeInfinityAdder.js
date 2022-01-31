'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (num) => {
    if (num !== undefined) {
      sum += num;

      return adder;
    } else {
      const sum2 = sum;

      sum = 0;

      return sum2;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
