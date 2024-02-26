'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;
  const adder = (...args) => {
    if (args.length === 0) {
      const currentResult = result;

      result = 0;

      return currentResult;
    }

    result += args.reduce((acc, val) => acc + val, 0);

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
