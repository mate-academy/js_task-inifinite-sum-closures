'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  return function adder(number) {
    if (arguments.length === 0) {
      const finalResult = result;

      result = 0;

      return finalResult;
    }

    result += number;

    return adder;
  };
}

module.exports = makeInfinityAdder;
