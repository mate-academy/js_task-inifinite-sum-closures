'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(...args) {
    if (args.length > 0) {
      sum += args.reduce((acc, val) => acc + val, 0);

      return adder;
    }

    const result = sum;

    sum = 0;

    return result;
  };
}

module.exports = makeInfinityAdder;
