"use strict";

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let arrayOfNumbers = [];

  function adder(number) {
    if (number === undefined) {
      const result = arrayOfNumbers.reduce(
        (prev, current) => prev + current,
        0
      );

      arrayOfNumbers = [];

      return result;
    }

    arrayOfNumbers.push(number);

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
