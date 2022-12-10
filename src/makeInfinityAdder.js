'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (num) => {
    const total = sum;

    if (num !== undefined) {
      sum += num;

      return adder;
    };

    sum = 0;

    return total;
  };

  return adder;
}

module.exports = makeInfinityAdder;
