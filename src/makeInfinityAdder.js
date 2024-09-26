'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function infinityAdder(number) {
    if (number === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += number;

    return infinityAdder;
  }

  return infinityAdder;
}

module.exports = makeInfinityAdder;
