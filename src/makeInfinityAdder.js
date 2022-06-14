'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  let emptyCalls = 0;

  const adder = (value) => {
    emptyCalls++;

    if (value !== undefined) {
      emptyCalls = 0;

      sum += value;

      return adder;
    }

    if (emptyCalls >= 2) {
      sum = 0;
    }

    return sum;
  };

  return adder;
}

module.exports = makeInfinityAdder;
