'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let result = 0;

  return function adder(x) {
    if (x === undefined) {
      const number = result;

      result = 0;

      return number;
    }

    result += x;

    return adder;
  };
}

module.exports = makeInfinityAdder;
