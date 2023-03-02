'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let numbers = [];

  const adder = number => {
    if (number !== undefined) {
      numbers.push(number);

      return adder;
    }

    const result = numbers.reduce((a, b) => (a + b), 0);

    numbers = [];

    return result;
  };

  return adder;
}

module.exports = makeInfinityAdder;
