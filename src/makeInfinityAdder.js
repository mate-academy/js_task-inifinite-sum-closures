'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sumOfNUmbers = 0;

  function adder(num) {
    if (typeof num === 'number') {
      sumOfNUmbers += num;

      return adder;
    } else {
      const finalValue = sumOfNUmbers;

      sumOfNUmbers = 0;

      return finalValue;
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
