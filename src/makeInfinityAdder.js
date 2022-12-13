'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  return function adder(x) {
    if (x === undefined) {
      const resAdd = result;

      result = 0;

      return resAdd;
    }
    result += x;

    return adder;
  };
}

module.exports = makeInfinityAdder;
