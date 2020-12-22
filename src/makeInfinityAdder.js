'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  return function adder(number) {
    if (number !== undefined) {
      result += number;

      return adder;
    }

    const savedResult = result;

    result = 0;

    return savedResult;
  };
}

module.exports = makeInfinityAdder;
