'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let count = 0;

  return function adder(arg) {
    if (arg === undefined) {
      const prevSum = count;

      count = 0;

      return prevSum;
    }

    count += arg;

    return adder;
  };
}

module.exports = makeInfinityAdder;
