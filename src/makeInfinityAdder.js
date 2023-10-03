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
      const finalResult = result;

      result = 0;

      return finalResult;
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
