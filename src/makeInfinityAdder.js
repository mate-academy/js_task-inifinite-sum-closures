'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  const numbers = [];

  const adder = (number) => {
    if (number === undefined) {
      const resultSum = numbers.reduce((sum, n) => sum + n, 0);

      numbers.length = 0;

      return resultSum;
    }
    numbers.push(number);

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
