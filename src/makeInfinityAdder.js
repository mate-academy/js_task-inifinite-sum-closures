'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (num) => {
    if (typeof num === 'undefined') {
      const lastSum = sum;

      sum = 0;

      return lastSum;
    } else {
      sum += num;

      return adder;
    }
  };

  return adder;
};

module.exports = makeInfinityAdder;
