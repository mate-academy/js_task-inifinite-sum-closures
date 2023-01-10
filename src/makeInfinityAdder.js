'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let numbers = [];

  return function adder(number) {
    if (typeof number === 'number') {
      numbers.push(number);

      return adder;
    }

    const result = numbers.reduce((sum, num) => sum + num, 0);

    numbers = [];

    return result;
  };
}

module.exports = makeInfinityAdder;
