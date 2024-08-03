'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function adder(number) {
    if (number === undefined) {
      sum = 0;

      return sum;
    }

    sum += number;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
