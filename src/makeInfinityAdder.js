'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let amountOfNumbers = 0;

  return function adder(number) {
    if (number === Number(number)) {
      amountOfNumbers += number;

      return adder;
    }

    const result = amountOfNumbers;

    amountOfNumbers = 0;

    return result;
  };
}

module.exports = makeInfinityAdder;
