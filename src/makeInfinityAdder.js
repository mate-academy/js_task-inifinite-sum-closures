'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  function adder(num) {
    if (num !== undefined) {
      result += num;

      return adder;
    } else {
      const newResult = result;

      result = 0;

      return newResult;
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
