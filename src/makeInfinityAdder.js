'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  return function adder(number) {
    if (number === undefined) {
      const accumulator = result;

      result = 0;

      return accumulator;
    }

    result += number;

    return adder;
  };
}

module.exports = makeInfinityAdder;
