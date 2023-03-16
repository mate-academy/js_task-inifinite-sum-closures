'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  return function adder(num) {
    if (num === undefined) {
      const value = result;

      result = 0;

      return value;
    }
    result += num;

    return adder;
  };
}

module.exports = makeInfinityAdder;
