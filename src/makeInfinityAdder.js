'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let numbers = [];

  const adder = (num) => {
    if (num !== undefined) {
      numbers.push(num);

      return adder;
    }

    const sum = numbers.reduce((a, b) => a + b, 0);

    numbers = [];

    return sum;
  };

  return adder;
}

module.exports = makeInfinityAdder;
