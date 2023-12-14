'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  let numbers = [];

  function adder(num) {
    if (num !== undefined) {
      sum += num;
      numbers.push(sum);

      return adder;
    } else {
      const result = sum;

      sum = 0;
      numbers = [];

      return result;
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
