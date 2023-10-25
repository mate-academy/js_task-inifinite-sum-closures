'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  const addition = (...args) => {
    if (args.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += args.reduce((prev, current) => prev + current, 0);

    return addition;
  };

  return addition;
}

module.exports = makeInfinityAdder;
