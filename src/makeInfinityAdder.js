'use strict';

/***
 *
 * @return {function}
 */
function makeInfinityAdder(sum = 0) {
  function adder(number) {
    if (number) {
      return makeInfinityAdder(sum + number);
    }

    return sum;
  }

  return adder;
}

module.exports = makeInfinityAdder;
