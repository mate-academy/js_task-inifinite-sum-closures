'use strict';

/*
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  return function adder(number) {
    if (number === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += number;

    return adder;
  };
}

module.exports = makeInfinityAdder;
