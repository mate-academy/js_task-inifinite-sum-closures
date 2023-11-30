'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sum = 0;

  const adder = (...args) => {
    if (args.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    } else {
      sum += args[0];

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
