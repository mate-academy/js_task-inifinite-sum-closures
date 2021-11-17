'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function adder(number) {
    if (arguments[0] !== undefined) {
      sum += number;

      return adder;
    }

    const finalResult = sum;

    sum = 0;

    return finalResult;
  }

  return adder;
}

module.exports = makeInfinityAdder;
