'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function adder(...params) {
    if (params.length < 1) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += params.reduce((sumOf, number) => sumOf + number, 0);

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
