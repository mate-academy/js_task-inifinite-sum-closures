'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (...args) => {
    if (args.length === 0) {
      const amount = sum;

      sum = 0;

      return amount;
    }

    sum += args[0];

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
