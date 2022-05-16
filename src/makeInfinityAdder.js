'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let total = 0;

  const adder = (...args) => {
    if (args.length === 0) {
      let copySum = total;

      total = 0;

      return copySum;
    }

    total += +args;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
