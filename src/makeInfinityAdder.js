'use strict';

/***
 * @return {function}
 */

function makeInfinityAdder() {
  const allArgs = [];

  const adder = (...args) => {
    if (args.length === 0) {
      const total = allArgs.reduce((sum, num) => sum + num, 0);

      allArgs.length = 0;

      return total;
    } else {
      allArgs.push(...args);

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
