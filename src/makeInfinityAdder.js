'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(numbers) {
    const sumCopy = sum;

    if (numbers === undefined) {
      sum = 0;

      return sumCopy;
    };
    sum += numbers;

    return adder;
  };
}

module.exports = makeInfinityAdder;
