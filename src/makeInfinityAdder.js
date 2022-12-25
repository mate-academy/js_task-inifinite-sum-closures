'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (...args) => {
    const count = sum;

    if (args.length > 0) {
      sum += args[0];

      return adder;
    } else {
      sum = 0;

      return count;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
