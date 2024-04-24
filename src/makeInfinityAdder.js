'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function infinityAdder(number) {
    if (typeof number === 'number') {
      sum += number;

      return infinityAdder;
    } else {
      const result = sum;

      sum = 0;

      return result;
    }
  }

  return infinityAdder;
}

module.exports = makeInfinityAdder;
