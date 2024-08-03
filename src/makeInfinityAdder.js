'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function adder(number) {
    if (number === undefined) {
      return sum;
    }

    sum += number;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
