'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function add(number) {
    if (typeof number === 'number') {
      sum += number;
    } else {
      const result = sum;

      sum = 0;

      return result;
    }

    return add;
  }

  return add;
}

module.exports = makeInfinityAdder;
