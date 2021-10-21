'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sumOfArgs = 0;

  return function adder(arg) {
    if (arg === undefined) {
      const output = sumOfArgs;

      sumOfArgs = 0;

      return output;
    }

    sumOfArgs += arg;

    return adder;
  };
}

module.exports = makeInfinityAdder;
