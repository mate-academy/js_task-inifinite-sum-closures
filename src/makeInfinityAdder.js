'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (...args) => {
    if (args.length < 1) {
      const result = sum;

      sum = 0;

      return result;
    } else {
      sum += args[0];

      return adder;
    };
  };

  return adder;
}

module.exports = makeInfinityAdder;
