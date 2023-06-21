'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  let emptyCall = 0;

  const adder = (num) => {
    if (typeof num === 'undefined') {
      sum = emptyCall > 0
        ? 0
        : sum;
      emptyCall++;

      return sum;
    }
    sum += num;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
