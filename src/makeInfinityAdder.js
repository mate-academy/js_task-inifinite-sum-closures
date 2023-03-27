'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  return function adder(number) {
    if (arguments.length > 0) {
      result += number;

      return adder;
    }

    const lastValue = result;

    result = 0;

    return lastValue;
  };
}

module.exports = makeInfinityAdder;
