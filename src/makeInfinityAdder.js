'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  return function adder(number) {
    if (number) {
      result += number;

      return adder;
    }

    const lastResult = result;

    result = 0;

    return lastResult;
  };
}

module.exports = makeInfinityAdder;
