'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sumOfArgs = 0;

  return function adder(args) {
    if (args === undefined) {
      const out = sumOfArgs;

      sumOfArgs = 0;

      return out;
    }
    sumOfArgs += args;

    return adder;
  };
}

module.exports = makeInfinityAdder;
