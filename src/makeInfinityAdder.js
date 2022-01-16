'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (elem) => {
    if (elem === undefined) {
      const total = sum;

      sum = 0;

      return total;
    }

    sum += elem;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
