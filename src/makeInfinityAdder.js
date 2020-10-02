'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(number) {
    if (!number) {
      const sumCurrent = sum;

      sum = 0;

      return sumCurrent;
    };

    sum += number;

    return adder;
  };
}

module.exports = makeInfinityAdder;
